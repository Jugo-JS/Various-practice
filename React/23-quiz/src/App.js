import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'

function App() {
  const { questions, index, nextQuestion, loading, waiting, count, setCount } = useGlobalContext()
  // console.log(questions)

  if(waiting) {
    return <SetupForm />
  }

   if(loading) {
    return <Loading />
  }


  const { question, correct_answer, incorrect_answers } = questions[index]
  
  
  let answers = incorrect_answers

  const tempIndex = Math.floor(Math.random() * 4)

  if(tempIndex === 3) {
    answers.push(correct_answer)
  } else {
    answers.push(answers[tempIndex])
    answers[tempIndex] = correct_answer
  }

  const checkAnswer = (answer) => {
    if(answer === correct_answer) {
      setCount((count) => count + 1)
      nextQuestion()
    } else {
      console.log('wrong answer')
      nextQuestion()
    }
  }

  return (
    <>
    <Modal />
    <section className='quiz'>
      <p className='correct-answers'>
        Correct Answers : {count} / {index}
      </p>

          <article className='container'>
            <h2 dangerouslySetInnerHTML={{ __html: question }} />
            <div className='btn-container'>
              
              {answers.map((answer, index) => {
                return <button key={index} className='answer-btn' onClick={(e) => checkAnswer(e.target.textContent)}>{answer}</button>
              })}
              
            </div>
          </article>
      
      <button className='next-question' onClick={nextQuestion}>next-qusetion</button>
    </section>
    </>
  )
}

export default App
