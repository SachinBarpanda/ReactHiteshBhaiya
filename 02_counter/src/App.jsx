import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  // let counter = 15;
  
  const addValue = ()=>{
    // console.log("value added ", Math.random());
    counter++;
    if(counter<=20)
    setCounter(counter);
    console.log(counter)
  }

  const removeValue = ()=>{
    if(counter>0){
      setCounter(--counter);
    }
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={ addValue}> {counter} Add Value</button>
      <button onClick={ removeValue}>Remove Value {counter} </button>
    </>
  )
}

export default App
