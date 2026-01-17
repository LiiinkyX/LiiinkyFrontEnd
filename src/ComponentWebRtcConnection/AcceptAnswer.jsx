 

const AcceptAnswer =async (offer,peerConnectionA) => {

    return   new Promise(async(resolve,reject)=>{


        try{

        peerConnectionA.current.onicegatheringstatechange = () => {
        if (peerConnectionA.current.iceGatheringState === "complete") {
          console.log("✅ answer  is ready to be sent to sender");
          resolve(peerConnectionA.current.localDescription);
        }
      };

 
      await  peerConnectionA.current.setRemoteDescription(new RTCSessionDescription(offer))             
      const answer =  await  peerConnectionA.current.createAnswer()
     await  peerConnectionA.current.setLocalDescription(answer)
        }catch(error){
            reject(error)
        }
    })

}

export default AcceptAnswer