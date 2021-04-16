import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  cart: cartItems,
  loading: false,
  amount: 0,
  total: 0
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  

 
  const fetchData = async() => {
    dispatch({ type: 'LOADING'})
    const response = await fetch(url);
    const data = await response.json();
        dispatch({ type: 'DISPLAY_ITEMS', payload: data })
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }
   
  const increaseItemNumber = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }

  const decreaseItemNumber = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS'})
  }, [state.cart])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItemNumber,
        decreaseItemNumber
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
