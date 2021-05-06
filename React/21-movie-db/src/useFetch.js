import React, { useState, useEffect } from 'react';

const url = `http://www.omdbapi.com/?s=Batman&apikey=b7038864`;

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

        if(data.Response === 'True') {
            setData(data.Search || data);
            setError({ show: false, msg:'' })
        } else {
            setError({ show: true, msg: data.Error })
        }
            setLoading(false);
            
        } catch (error) {
            console.log(error);
        }
    }
    

    useEffect(() => {
        fetchMovies();
    }, [])


    return { data, error, loading }

}

export default useFetch; 