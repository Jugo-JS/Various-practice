import React, { useState, useEffect } from 'react';

const API_ENDPOINT = `http://www.omdbapi.com/?apikey=b7038864`;

const useFetch = (urlParams) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({ show: false, msg:'' });
    const [data, setData] = useState(null);

    const fetchMovies = async (url) => {
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
        fetchMovies(`${API_ENDPOINT}${urlParams}`);
    }, [urlParams])


    return { data, error, loading }

}

export default useFetch; 