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
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: 'sports',
    difficulty: 'easy'
  })
  // const [amount, setAmount] = useState(10)
  // const [category, setCategory] = useState('sports')
  // const [difficulty, setDifficulty] = useState('easy')
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [count, setCount] = useState(0)
  const [error, setError] = useState(false)
  // console.log(question)


  const fetchQuestions = async() => {
    setLoading(true)
    setWaiting(false)
    try {
      const response = await fetch(`${API_ENDPOINT}amount=${quiz.amount}&category=${table[quiz.category]}&difficulty=${quiz.difficulty}&type=multiple`)
      const data = await response.json()
      
      if(data.results.length > 0) {
        setQuestions(data.results)
        setLoading(false)
        setError(false)
      } else {
        setLoading(false)
        setWaiting(true)
        setError(true)
      }
    } catch (error) {
      setWaiting(true)
      setError(true)
      console.log(error)
    }
  }

  // useEffect(() => {
  //   fetchQuestions()
  // }, [])

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1
      if(index > questions.length - 1) {
        openModal()
        return 0
      } else {
        return index
      }
    })
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setWaiting(true)
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setQuiz ({...quiz, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchQuestions()
  }

  return (
    <AppContext.Provider 
      value={{
        quiz,
        setQuiz,
        questions,
        index,
        nextQuestion,
        loading, 
        waiting,
        setWaiting,
        openModal,
        isModalOpen,
        closeModal,
        count,
        setCount,
        fetchQuestions,
        handleChange,
        handleSubmit,
        error
      }}
    >{children}
    </AppContext.Provider>)
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
