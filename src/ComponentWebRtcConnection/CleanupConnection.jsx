 
const CleanupConnection = (localStream,remoteStream,peerConnectionA) => {
 
  if (localStream.current) {
    localStream.current.getTracks().forEach(track => track.stop());
    localStream.current = null;
  }

  if (remoteStream.current) {
    remoteStream.current.getTracks().forEach(track => track.stop());
    remoteStream.current = null;
  }

  if (peerConnectionA.current) {
    peerConnectionA.current.close();
    peerConnectionA.current = null;
  }
 
}

export default CleanupConnection