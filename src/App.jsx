
import './App.css'
import DigitalClock from './DigitalClock'
import ToDoList from './ToDoList'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DigitalClock/>
      <ToDoList/>
      
       
    </>
  )
}

export default App
