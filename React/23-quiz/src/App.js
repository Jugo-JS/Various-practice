import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'

function App() {
  const { questions, index } = useGlobalContext()
  console.log(questions[index])

  // const { question, correct_answer, incorrect_answers } = questions[index]
  // console.log([...incorrect_answers])
  
  // let answers = incorrect_answers

  // const tempIndex = Math.floor(Math.random() * 4)

  // if(tempIndex === 3) {
  //   answers.push(correct_answer)
  // } else {
  //   answers.push(answers[tempIndex])
  //   answers[tempIndex] = correct_answer
  // }

  return (
    <>
    {/* <SetupForm />
    <Loading />
    <Modal /> */}
    <section className='quiz'>
      <p className='correct-answers'>
        Correct Answers : 0/0
      </p>

          <article className='container'>
            <h2>bla bla</h2>
            <div className='btn-container'>
              <button className='answer-btn'>bla bla</button>
              {/* {incorrect_answers.map((answer) => {
                return <button className='answer-btn'>{answer}</button>
              })} */}
              
            </div>
          </article>
      
      <button className='next-question'>next-qusetion</button>
    </section>

    </>
  )
}

export default App
