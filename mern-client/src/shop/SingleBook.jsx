// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const SingleBook = () => {
//     const { _id, bookTitle, imageUrl } = useLoaderData();

//     return (
//         <div className='mt-28 px-4 lg:px-24'>
//             <img src={imageUrl} alt='' className='h-96' />
//             <h2>{bookTitle}</h2>
//         </div>
//     )
// }

import React, { useState } from 'react';

import { loadStripe } from "@stripe/stripe-js";
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const SingleBook = () => {
    const [quantity, setquantity] = useState(1);
    const { _id, bookTitle, bookPrice } = useLoaderData();
    const [cart, setCart] = useState([
        { id: 1, name: bookTitle, bookPrice, quantity: 1 },
    ]);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const getTotalPrice = () => {
        return cart.reduce((total, product) => total + bookPrice * product.quantity, 0);
    };

    const handleQuantityChange = (productId, newQuantity) => {
        setquantity(newQuantity)
        setCart((prevCart) =>
            prevCart.map((product) =>
                product.id === productId ? { ...product, quantity: newQuantity } : product
            )
        );
    };
    const handleBillSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const firstname = form.FirstName.value;
        const secondname = form.LastName.value;
        const emailaddress = form.EmailAddress.value;
        const Telephone = form.TelePhone.value;
        const Address = form.Address.value;
        const Town = form.Town.value;
        const state = form.State.value;
        const poststate = form.PostCode.value;
        const country = form.Country.value;
        const Quantity = quantity;
        const bookName = bookTitle;
        const price = getTotalPrice();
        const Obj = {
            firstname, secondname, emailaddress, Telephone, Address, Town, state, poststate, country, Quantity, bookName, price
        }
        fetch("http://localhost:8000/billing-details", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(Obj)
        })
        // .then(res => res.json()).then(data => {
        //     alert("Order Placed Successfully");
        //     navigate(from, { replace: true });
        // })
    }

    const handleRemoveProduct = (productId) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    };

    const makePayment = async () => {
        const stripe = await loadStripe("pk_test_51ORCVfSJz7ijszTljKqnqH3PZkRJvnMmAP7qomb50BfVeNveBOZxt2R96AvI7b4BeydcUqWaTQEEl1NbylloenLY00pj3Ysp4H");
        const body = {
            prod:cart
        }
        const headers = {
            "Content-Type": "application/json"
        }
        const response = await fetch("http://localhost:8000/create-checkout-session", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        })
        const session = await response.json();
        const resul = stripe.redirectToCheckout({
            sessionId: session.id
        })
    }
    return (
        <div className='flex flex-row '>
            <div className='mt-20 ml-40 mb-10'>
                <h2 className='mb-8 text-3xl font-bold'>Billing details</h2>
                <form className="flex lg:w-[500px] flex-col flex-wrap gap-4" onSubmit={handleBillSubmit}>
                    {/* first row */}
                    <div className='flex gap-8'>
                        <div className='lg:w-1/2'>
                            <div className="mb-2 block">
                                <Label htmlFor="FirstName" value="First Name" />
                            </div>
                            <TextInput id="FirstName" name='FirstName' type="text" placeholder="Book name" required />
                        </div>
                        <div className='lg:w-1/2'>
                            <div className="mb-2 block">
                                <Label htmlFor="LastName" value="Last Name" />
                            </div>
                            <TextInput id="LastName" name='LastName' type="text" placeholder="Book name" required />
                        </div>
                    </div>
                    {/* second row */}
                    <div className='flex gap-8'>
                        <div className='lg:w-1/2'>
                            <div className="mb-2 block">
                                <Label htmlFor="EmailAddress" value="Email Address" />
                            </div>
                            <TextInput id="EmailAddress" name='EmailAddress' type="email" placeholder="Book image Url" required />
                        </div>
                        <div className='lg:w-1/2'>
                            <div className="mb-2 block">
                                <Label htmlFor="TelePhone" value="Telephone" />
                            </div>
                            <TextInput id="TelePhone" name='TelePhone' type="number" placeholder="TelePhone" required />
                        </div>
                    </div>
                    {/* third row */}

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="Address" value="Address" />
                        </div>
                        <Textarea id="Address" name='Address' placeholder="Write your address" required rows={4} className='w-full' />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="Town" value="Suburb/Town" />
                        </div>
                        <TextInput id="Town" name='Town' type="text" placeholder="e.g Delhi" required />
                    </div>
                    {/* fourth row */}
                    <div className='flex gap-8'>
                        <div className='lg:w-1/2'>
                            <div className="mb-2 block">
                                <Label htmlFor="State" value="State/Territory" />
                            </div>
                            <TextInput id="State" name='State' type="text" placeholder="e.g Punjab" required />
                        </div>
                        <div className='lg:w-1/2'>
                            <div className="mb-2 block">
                                <Label htmlFor="PostCode" value="PostCode" />
                            </div>
                            <TextInput id="PostCode" name='PostCode' type="text" placeholder="e.g 125133" required />
                        </div>
                    </div>
                    {/* fifth row */}
                    <div className='flex gap-8'>
                        <div className='lg:w-1/2'>
                            <div className="mb-2 block">
                                <Label htmlFor="Country" value="Country" />
                            </div>
                            <TextInput id="Country" name='Country' type="text" placeholder="e.g india" required />
                        </div>
                    </div>
                    <Button type="submit" onClick={makePayment}>Proceed to Payment
                    </Button>
                </form>
            </div>
            <div className="max-w-4xl mx-auto mt-20">
                <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
                <div>
                    <table className="min-w-full border border-gray-300 mt-10">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Book Name</th>
                                <th className="py-2 px-4 border-b">Quantity</th>
                                <th className="py-2 px-4 border-b">Price</th>
                                <th className="py-2 px-4 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((product) => (
                                <tr key={product.id}>
                                    <td className="py-2 px-4 border-b">{product.name}</td>
                                    <td className="py-2 px-4 border-b">
                                        <input
                                            type="number"
                                            min="1"
                                            value={product.quantity}
                                            onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                                            className="w-12 text-center border border-gray-300"
                                        />
                                    </td>
                                    <td className="py-2 px-4 border-b">${product.bookPrice}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button
                                            onClick={() => handleRemoveProduct(product.id)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mt-4">
                        <p className="text-xl font-bold">Total: ${getTotalPrice().toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;
