// FetchData.jsx
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axiosInstance from "../utils/Axios";

const FetchData = ({ apiUrl }) => {
    const [books, setBooks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false); // Track if data is loaded

    useEffect(() => {
        const fetchData = async () => {
            if (books.length === 0 && !isLoaded) { // Check if books data already exists
            try {
                const response = await axiosInstance.get(apiUrl);
                console.log(response.data, "API Response");
                if(response.status == 200){
                    setBooks(response.data);    
                    console.log(response.data);
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
