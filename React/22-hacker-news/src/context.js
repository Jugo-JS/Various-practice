import React, { useContext, useEffect, useReducer } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
  isLoading: false,
  news: [],
  query: 'react',
  page_number: 0
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [stories, dispatch] = useReducer(reducer, initialState)

useEffect(() => {
  const fetchNews = async () => {
    const response = await fetch(`${API_ENDPOINT}query=${stories.query}&page=${stories.page_number}`);
    const data = await response.json();
    console.log(data)
    dispatch({ type: 'SET-LOADING' })
    dispatch({ type: 'SET_STORIES', payload: data.hits})
  }
  fetchNews();
}, [stories.page_number, stories.query])

  return <AppContext.Provider value={{ stories, dispatch }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }