import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const myObj = {
    name : "sachin",
    age : 48
  }
  const arr = [3,4,'Graham Tripathi']
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-md mb-4'>Tailwind Test</h1>

      <Card channel = "Learning from Chai aur code" newObj = {myObj} newArr = {arr[2]}/>
      <Card username = "Great out of Everything"/>
    </>
  )
}

export default App
