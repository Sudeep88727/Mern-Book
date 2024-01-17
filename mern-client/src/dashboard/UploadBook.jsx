import React, { useState } from 'react';

import { Button, Label, TextInput, Textarea } from 'flowbite-react';
const UploadBook = () => {
    const BookCategories = [
        "Fiction",
        "Non-Fiction",
        "Mystery",
        "Programming",
        "Science Fiction",
        "Fantasy",
        "Horror",
        "Bibliography",
        "Autobiography",
        "History",
        "Self-help",
        "Memoir",
        "Business",
        "Children Books",
        "Travel",
        "Religion",
        "Art and Design"
    ]

    const [selectedBookCategory, setselectedBookCategory] = useState(BookCategories[0]);
    const handleChangeSelectedValue = (event) => {
        setselectedBookCategory(event.target.value);
    }
    const handleBookSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageUrl = form.imageUrl.value;
        const category = form.category.value;
        const bookDescription = form.bookDescription.value;
        const bookPdfUrl = form.bookPdfUrl.value;
        const bookPrice = form.bookPrice.value;
        const bookObj = {
            bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl, bookPrice
        }
        fetch("http://localhost:8000/upload-book", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(bookObj)
        }).then(res => res.json()).then(data => {
            alert("Book uploaded Successfully");
        })
        form.reset();
    }
    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>upload a book</h2>
            <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleBookSubmit}>
                {/* first row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book title" />
                        </div>
                        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book name" required />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author name" />
                        </div>
                        <TextInput id="authorName" name='authorName' type="text" placeholder="Book name" required />
                    </div>
                </div>
                {/* second row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageUrl" value="Image Url" />
                        </div>
                        <TextInput id="imageUrl" name='imageUrl' type="text" placeholder="Book image Url" required />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="inputState" value="Book category" />
                        </div>
                        <select id='inputState' name='category' className='w-full rounded' value={selectedBookCategory}
                            onChange={handleChangeSelectedValue} >
                            {
                                BookCategories.map((option) =>
                                    <option key={option} value={option}>{option}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                {/* third row */}

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookDescription" value="Book description" />
                    </div>
                    <Textarea id="bookDescription" name='bookDescription' placeholder="Write your book description..." required rows={4} className='w-full' />
                </div>
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookPdfUrl" value="Book Pdf Url" />
                        </div>
                        <TextInput id="bookPdfUrl" type="bookPdfUrl" name='bookPdfUrl' placeholder="Book url" required />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookPrice" value="book Price" />
                        </div>
                        <TextInput id="bookPrice" name='bookPrice' type="number" placeholder="Book name" required />
                    </div>
                </div>
                <Button type="submit">Submit
                </Button>
            </form>
        </div>
    )
}

export default UploadBook