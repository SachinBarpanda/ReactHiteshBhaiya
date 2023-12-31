import { useState , useCallback, useEffect,useRef } from 'react'
import './App.css'


function App() {
  const [length , setLength] = useState(8)
  const [useNumber , setUseNumber] = useState(false)
  const [useCharacter , setUseCharacter] = useState(false)
  const [password , setPassword ] = useState("")

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(useNumber){
      str += "0123456789"
    }
    if(useCharacter){
      str += "~`!@#$%^&*()-+:<>?"
    }

    for (let i = 0; i < length; i++) {
      let charIdx = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(charIdx);
    }

    setPassword(pass);

  },[length,useNumber, useCharacter, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
   passwordGenerator(); 
  },[length,useNumber,useCharacter,passwordGenerator])


  return (
    <>
      <div className=' w-10/12 m-auto shadow-2xl rounded-xl text-orange-400 text-xl bg-gray-700 my-8 ' >
      
      <h1 className='text-white font-bold text-center pt-6 mb-12 '>Password Generator</h1>
        <div className=' flex shadow-2xl rounded-xl px-4 pb-8 overflow-hidden justify-center  w-full '>
          <input type="text"
            value={password}
            className=' rounded-lg outline-none w-2/5 p-2 mx-4'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py- 2 px-4 rounded-xl'
          onClick={copyPasswordToClipboard}
          >Copy</button>

        </div>
        <div className='flex justify-center text-2xl gap-x-6'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6} max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label> Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={useNumber}
            id='numberInput'
            onChange={()=>{
              setUseNumber((prev)=>!prev)
            }}
            //use setUseNumber if this doesn't work plzzz
            />
            <label htmlFor="numberInput">Include Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={useCharacter}
            id='characterInput'
            onChange={()=>{
              setUseCharacter((prev)=>!prev)
            }}
            />
            <label htmlFor="numberInput">Include Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
