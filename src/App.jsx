import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
 <Test text={"Sup"}/>
 <Test text={"Sri"}/>
  </div>
  )
}

function Test({text}){
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

export default App
