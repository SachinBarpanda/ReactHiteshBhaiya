import { useState } from 'react'
import './App.css'

function App() {
  let [color, setColor] = useState("Black");

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-12 '>

          <div className='flex flex-wrap justify-center gap-3 shadow-white bg-white px-3 rounded-lg text-xl'>
            <button onClick={()=>setColor("red")} className='outline-none m-1 rounded-full px-4 py-1 text-white' style={{backgroundColor:"red"}}>Click</button>
    
            <button onClick={()=>setColor("green")} 
            className='outline-none m-1 rounded-full px-4 py-1 text-white' style={{backgroundColor:"Green"}}>Click</button>
    
            <button onClick={()=>setColor("blue")} className='outline-none m-1 rounded-full px-4 py-1 text-white' style={{backgroundColor:"Blue"}}>Click</button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
