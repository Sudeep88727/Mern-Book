const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const stripe = require("stripe")("sk_test_51ORCVfSJz7ijszTljqZaekF4FBA4z2t0DfFd0IORmUah5ZB7LOWLm1cqHfMWDbKqdHTLIs5GdgfCRbu5TJRzlx5O00z9LznGH1");
// console.log(process.env.STRIPE_SECRET);
// to share resources via multiple networks
const cors = require("cors");

app.use(cors());
app.use(express.json());

// mongo db connection

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mern-book-store:0NB1Y6E8nW1AuJWe@cluster0.ov4rjdj.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {

        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        // create a collection
        const bookCollections = client.db("BookInventory").collection("books");

        // shopping cart collection
        const ShopCart = client.db("BookInventory").collection("Shop");

        app.post("/billing-details", async (req, res) => {
            const data = req.body;
            const result = await ShopCart.insertOne(data);
            res.send(result);
        })

        //insert book into db
        app.post("/upload-book", async (req, res) => {
            const data = req.body;
            const result = await bookCollections.insertOne(data);
            res.send(result);
        })

        // get books
        app.get("/get-all-books", async (req, res) => {
            const books = await bookCollections.find();
            const result = await books.toArray();
            console.log(result);
            res.send(result);
        })

        //update books data
        app.patch("/update-books/:id", async (req, res) => {
            const id = req.params.id;
            const updateBookData = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    ...updateBookData
                }
            }

            const result = await bookCollections.updateOne(filter, updateDoc, options);
            res.send(result);
        })

        //delete data
        app.delete("/book/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const result = await bookCollections.deleteOne(filter);
            res.send(result);
        })

        app.get("/get-all-books", async (req, res) => {
            let query = {};
            if (req.query?.category) {
                query = { category: req.query.category }
            }
            const result = await bookCollections.find(query).toArray();
            res.send(result);
        })

        app.get('/book/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const result = await bookCollections.findOne(filter);
            res.send(result);

        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}

run().catch(console.dir);
app.post('/create-checkout-session', async (req, res) => {
    const { prod } = req.body;
    const lineItems = prod.map((prods) => ({
        price_data: {
            currency: "usd",
            product_data: {
                name: prods.name,
            },
            unit_amount: prods.bookPrice * 100,
        },
        quantity: 1,
    }));
    const session = await stripe.checkout.sessions.create({
        currency: "usd",
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:5173/",
        cancel_url: "http://localhost:5173/",
    })
    res.json({ id: session.id })
})
app.get("/", (req, res) => {
    res.send("hii");
})

app.listen(port, () => {
    console.log(`server host successfullt at ${port}`);
})