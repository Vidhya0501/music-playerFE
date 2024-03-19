import React from 'react'
import { useSelector } from 'react-redux'


function Home() {
   const {user}=useSelector(state=>state.user)
  return (
    <div>
        <h1>Home</h1>
        <h1>{user?.username}</h1>
    </div>
  )
}

export default Home