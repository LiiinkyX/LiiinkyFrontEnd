import React from 'react'
import "./index.css"
import {Routes as Router,Route as Go } from "react-router-dom"
import LiinkkyMeet from './Pages/LiinkkyMeet'
import Home from './Pages/Home'
import Loader from './test/Test'
import WebRtc from './test/WebRtc'
import TestWebscoekt from './test/TestWebscoekt'
const App = () => {
  
  return (
  <>
  <Router>
    <Go path='/' element={<><Home/></>}/>
    <Go path='/v1' element={<><LiinkkyMeet/></>}/>
    <Go path='/test' element={<Loader/>}/>
    <Go path='/webRtc' element={<WebRtc/>}/>
     <Go path='/testwebsocket' element={<TestWebscoekt/>}/>
    
    <Go path='/*' element={<p>404</p>}/>
  </Router>
  
  </>
  )
}

export default App              