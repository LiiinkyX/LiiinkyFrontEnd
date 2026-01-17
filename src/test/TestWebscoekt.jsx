import  { useEffect, useState } from 'react'
import  SocketHandler  from "../socket/SocketHandler"
const TestWebscoekt = () => {

    const [data,setdata] = useState("")
    

     
  return (
    <> 
    <input type='text' onChange={(e)=>setdata(e.target.value)}/>
    <div >TestWebscoekt</div>
    <button onClick={()=>SocketHandler.emit("hay",data)}>send</button>

     </>
  )
}

export default TestWebscoekt