// FetchData.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../utils/ProductCard.jsx';

const FetchData = ({ apiUrl }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                setBooks(response.data);
                console.log(books);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [apiUrl]);

    return <ProductCard books={books} />;
};

export default FetchData;
