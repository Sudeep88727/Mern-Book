import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
const ManageBook = () => {
    const [allbooks, setAllBooks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/get-all-books").then(res => res.json()).then(data => setAllBooks(data));
    }, [])
    // delete a book
    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:8000/book/${id}`, {
            method: "DELETE",
        }).then(res => res.json()).then(data => {
            alert("book is deleted Successfully!")
        });
    }

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>
            <Table className='lg:w-[1180px]'>
                <Table.Head>
                    <Table.HeadCell>No.</Table.HeadCell>
                    <Table.HeadCell>Book Name</Table.HeadCell>
                    <Table.HeadCell>Author Name</Table.HeadCell>
                    <Table.HeadCell>Category</Table.HeadCell>
                    <Table.HeadCell>Prices</Table.HeadCell>
                    <Table.HeadCell>Edit or Manage</Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                {
                    allbooks.map((books, index) =>

                        <Table.Body className="divide-y" key={books._id}>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {books.bookTitle}
                                </Table.Cell>
                                <Table.Cell>{books.authorName}</Table.Cell>
                                <Table.Cell>{books.category}</Table.Cell>
                                <Table.Cell>${books.bookPrice}</Table.Cell>
                                <Table.Cell>
                                    <Link to={`/admin/dashboard/edit-book/${books._id}`}
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                                        Edit
                                    </Link>
                                    <button onClick={() => handleDelete(books._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>
                                        Delete
                                    </button>
                                </Table.Cell>
                            </Table.Row>

                        </Table.Body>
                    )}
            </Table></div>
    )
}
export default ManageBook