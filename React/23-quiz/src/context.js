import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true)
  const [loading, setLoading] = useState(false)
  const [amount, setAmount] = useState('10')
  const [category, setCategory] = useState('21')
  const [difficulty, setDifficulty] = useState('easy')
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  // console.log(question)

  const fetchQuestions = async() => {
    setLoading(true)
    setWaiting(false)
    try {
      const response = await fetch(`${API_ENDPOINT}amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)
      const data = await response.json()
      setQuestions(data.results)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  return (
    <AppContext.Provider 
      value={{
        setAmount, 
        setCategory, 
        setDifficulty, 
        questions,
        index,
        loading, 
        waiting
      }}
    >{children}
    </AppContext.Provider>)
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
