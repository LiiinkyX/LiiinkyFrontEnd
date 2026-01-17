    

export const MakeConnnections =async (answer,peerConnectionA) => {
 
  try {
   
     
      await peerConnectionA.current.setRemoteDescription(answer);
      console.log("✅ A got remote answer, connection is ready!");
     
  } catch (err) {
    console.log(err);
  }
};

 
