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
    <div  className=' text-center m-4'>Github Followers :{data.followers}
    <img src={data.avatar_url}  width="100px" alt="" />
     </div>
  )
}

export default  Github
export const githubInfoLoader = async () =>{
  const response = await fetch("https://api.github.com/users/sachinbarpanda")
  return response.json()
}