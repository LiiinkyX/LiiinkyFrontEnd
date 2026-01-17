const detectVoice = (stream) => {
  const audioContext = new AudioContext();
  const source = audioContext.createMediaStreamSource(stream);
  const analyser = audioContext.createAnalyser();

  analyser.fftSize = 512;
  source.connect(analyser);

  const data = new Uint8Array(analyser.frequencyBinCount);

  const detect = () => {
    analyser.getByteFrequencyData(data);

    // حساب مستوى الصوت
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }

    const volume = sum / data.length;

    if (volume > 15) {
      console.log("🎤 أنت تتكلم");
    } else {
      console.log("🤫 صمت");
    }

    requestAnimationFrame(detect);
  };

  detect();
};

export default detectVoice