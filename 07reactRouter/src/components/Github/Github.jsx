import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function  Github() {

  const data = useLoaderData();

  // const [data,setData] = useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/sachinbarpanda')
  //   .then((res)=> res.json())
  //   .then((data)=> setData(data))
  // }, [])
  
  return (
    <div  className=' text-center text-2xl my-6 bg-slate-700 text-white m-auto'>Github Followers :{data.followers}
    <img className='m-auto my-6' src={data.avatar_url}  width="200px" alt="" />
     </div>
  )
}

export default  Github
export const githubInfoLoader = async () =>{
  const response = await fetch("https://api.github.com/users/sachinbarpanda")
  return response.json()
}