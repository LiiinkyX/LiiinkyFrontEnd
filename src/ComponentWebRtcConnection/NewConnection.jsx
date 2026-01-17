import CleanupConnection from "./CleanupConnection";

 

const NewConnection =  async (localStream,remoteStream,peerConnectionA,iceServers,mycamera,mycamera2) => {
 
   
  CleanupConnection(localStream,remoteStream,peerConnectionA)
 
  peerConnectionA.current = new RTCPeerConnection({ iceServers });

   
  peerConnectionA.current.ontrack = (event) => {
    event.streams[0].getTracks().forEach(track => remoteStream.current.addTrack(track));
  };

 
  localStream.current = await navigator.mediaDevices.getUserMedia({video:true, audio:false});
  remoteStream.current = new MediaStream();

  mycamera.current.srcObject = localStream.current;
  mycamera2.current.srcObject = remoteStream.current;

  localStream.current.getTracks().forEach(track => peerConnectionA.current.addTrack(track, localStream.current));
 
}

 

export default NewConnection