import React from 'react'
import "../StoreCss/Home.css"
import {useNavigate}  from "react-router-dom"

const Home = () => {
    const Nav = useNavigate();
  return (
    <div className='_home'>
        <button className='btn1' onClick={()=>Nav("/v1")}>Join</button>
        
    </div>
  )
}

export default Home