import React, { useEffect, useState } from 'react';
import BookCards from '../Components/BookCards';

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/get-all-books").then(res => res.json()).then(data => setBooks(data.slice(0, 8)));
    }, [])
    return (
        <div><BookCards books={books} headline="best seller books" /></div>
    )
}

export default BestSellerBooks