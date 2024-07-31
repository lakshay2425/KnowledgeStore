// FetchData.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const FetchData = ({ apiUrl }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                setBooks(response.data.result);
                console.log(response);
                if(response.status == 200){
                    console.log(response.data.message);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [apiUrl]);

    return <ProductCard books={books} />;
};

export default FetchData;
