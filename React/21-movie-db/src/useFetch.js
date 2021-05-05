import React, { useState, useEffect } from 'react';

const url = `http://www.omdbapi.com/?i=tt3896198&apikey=b7038864`;

const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({ show: false, msg:'' });
    const [data, setData] = useState(null);

    const fetchMovies = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            
        //    console.log(data);
            setLoading(false);
            setData(data.Response || data);
        } catch (error) {
            console.log(error);
        }
    }
    

    useEffect(() => {
        fetchMovies();
    }, [])


    return { data }

}

export default useFetch; 