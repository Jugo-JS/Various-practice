import React, { useState, useContext, useEffect } from 'react';
import useFetch from './useFetch';
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=b7038864`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('batman');
  const { data, loading, error } = useFetch(`&s=${query}`);
  // console.log(data);
  return (
    <AppContext.Provider 
      value={{ 
        data, 
        loading, 
        error, 
        query, 
        setQuery 
      }}>
        {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
