

import {  useEffect, useRef, useState } from 'react'
import createAnswerFromOffer from '../ComponentWebRtcConnection/AcceptAnswer';
import CreateOffer from '../ComponentWebRtcConnection/CreateOffer';
import NewConnection from '../ComponentWebRtcConnection/NewConnection';
import { MakeConnnections } from '../ComponentWebRtcConnection/MakeConnnections';
import GenerateSessionIds from "../ComponentWebRtcConnection/GenerateSessionIds"
 

const WebRtc = () => {
 const iceServers = [
    {
      urls: 'stun:stun.l.google.com:19302',  
    },
  ] 
 const peerConnectionA = useRef(null);
 const localStream = useRef(null);
 const remoteStream = useRef(null);


 const mycamera = useRef(null)
 const mycamera2 = useRef(null)


 









 //negotiationneeded

const init = async()=>{
     
    try{
    peerConnectionA.current = new RTCPeerConnection({ iceServers })

   // ------------------------------
   localStream.current  = await navigator.mediaDevices.getUserMedia({audio:false,video:true})
   
   remoteStream.current = new MediaStream();
   // ------------------------------
   mycamera.current.srcObject =  localStream.current
   mycamera2.current.srcObject = remoteStream.current;

   localStream.current.getTracks().forEach((track)=> peerConnectionA.current.addTrack(track,localStream.current))  
  //----------------------------------------------------------------------------
  console.log(peerConnectionA)
 
  peerConnectionA.current.ontrack = (event)=>{
   event.streams[0].getTracks().forEach((track)=>remoteStream.current.addTrack(track))
  }
 
 
  //-------------------------------------
  
    
   
    }
    catch(error){
        console.log(error)
    }
    
}


useEffect(()=>{
   
    
    init();
      return () => {
      if (localStream.current) {
        localStream.current.getTracks().forEach(track => track.stop());
        
      }
      if(remoteStream.current){
       remoteStream.current.getTracks().forEach(track => track.stop());
      }
    }  
},[])

const [p1,setp1] = useState("")
const [p2,setp2] = useState("")


const handelCreateOfferTest = async ()=>{
 
  if(localStream.current && remoteStream.current && peerConnectionA.current!=null ){
     const offer = await CreateOffer(peerConnectionA)
     setp1(JSON.stringify(offer))
    
 
   
  }else{
    console.log("we dont ready to create offer")
  }

}

const HandelSendAnswer = async()=>{
  if(p1){
    const answer = await createAnswerFromOffer(JSON.parse(p1),peerConnectionA)
    
    setp2(JSON.stringify(answer))

   
  }else{
    console.log("there is no offer to accept")
  }
}



 



 
const nextone  = async()=>{
   
    try{
      await  NewConnection(localStream,remoteStream,peerConnectionA,iceServers,mycamera,mycamera2);
        const offer = await CreateOffer(peerConnectionA);
          setp1(JSON.stringify(offer))

     // const answer = await createAnswerFromOffer(offer, peerConnectionA);
    
     console.log(offer)
     //console.log(answer);


    }
    catch(error){
      console.log(error)
    }
  
}






const watchporn = async()=>{
 
     
await MakeConnnections(JSON.parse(p2),peerConnectionA)
 
 
}
 





return (
 
 <> 
 <div className="testing">

 <video   ref={mycamera} autoPlay/>
 <video   ref={mycamera2}    autoPlay/>
 

 </div>
<button style={{cursor:"pointer"}} onClick={()=>handelCreateOfferTest()}>create offer</button>
<button style={{cursor:"pointer"}} onClick={()=>HandelSendAnswer()}>create answer</button>
<button style={{cursor:"pointer",backgroundColor:"green",color:"white",fontWeight:"bold"}} onClick={()=>watchporn()}>watch porn</button>
<button style={{cursor:"pointer"}} onClick={()=>nextone()}>next one </button>
<button onClick={()=>console.log(GenerateSessionIds())}>unique id</button>
<input type='text' placeholder='offer' style={{width:"100%"}} value={p1} onChange={(e)=>setp1(e.target.value)}/>
<input type='text' placeholder='answer' style={{width:"100%"}} value={p2} onChange={(e)=>setp2(e.target.value)}/>

 </>
  )
}

export default WebRtc