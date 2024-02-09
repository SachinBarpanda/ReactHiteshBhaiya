import './App.css'
import React,  {useState} from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [willupdate , setWillUpdate] = useState({status:false, id:""});
  return (
    <>
      <h1>Learning Redux toolkit from Chai Aur Code (hitesh sir)</h1>
      <AddTodo onUpdateClick = {willupdate}/>
      <Todos updateStatus = {setWillUpdate}/>
    </>
  )
}

export default App
