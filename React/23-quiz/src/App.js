import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'

function App() {
  return (
    <>
    <SetupForm />
    {/* <Loading /> */}
    <Modal />
    </>
  )
}

export default App
