import React, { useEffect, useState } from 'react';
import BookCards from '../Components/BookCards';
const OtherBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/get-all-books").then(res => res.json()).then(data => setBooks(data.slice(4, 10)));
    }, [])
    return (
        <div><BookCards books={books} headline="other books" /></div>
    )
}

export default OtherBooks