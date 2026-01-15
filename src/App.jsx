import React from 'react'
import "./index.css"
import {Routes as Router,Route as Go } from "react-router-dom"
import LiinkkyMeet from './Pages/LiinkkyMeet'
const App = () => {
  return (
  <>
  <Router>
    <Go path='/v1' element={<><LiinkkyMeet/></>}/>
    <Go path='/*' element={<p>404</p>}/>
  </Router>
  
  </>
  )
}

export default App              