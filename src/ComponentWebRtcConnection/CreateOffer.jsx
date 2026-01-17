 const CreateOffer = (peerConnectionA) => {
  return new Promise(async (resolve, reject) => {
    try {
      peerConnectionA.current.onicegatheringstatechange = () => {
        if (peerConnectionA.current.iceGatheringState === "complete") {
          console.log("✅ Offer is ready to be sent");
          resolve(peerConnectionA.current.localDescription);
        }
      };

      const offer = await peerConnectionA.current.createOffer();
      await peerConnectionA.current.setLocalDescription(offer);
    } catch (err) {
      reject(err);
    }
  });
};

export default CreateOffer


 

