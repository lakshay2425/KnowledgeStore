// FetchData.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const FetchData = ({ apiUrl }) => {
    const [books, setBooks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false); // Track if data is loaded

    useEffect(() => {
        const fetchData = async () => {
            if (books.length === 0 && !isLoaded) { // Check if books data already exists
            try {
                const response = await axios.get(apiUrl);
                if(response.status == 200){
                    setBooks(response.data.result);    
                    console.log(response.data.message);
                    setIsLoaded(true); // Mark as loaded
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        };
        fetchData();
    }, [apiUrl,books, isLoaded]);

    return <ProductCard books={books} />;
};

export default FetchData;
