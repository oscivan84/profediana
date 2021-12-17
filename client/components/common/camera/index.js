import React, { useCallback, useRef } from 'react';
import Webcam from "react-webcam";

const Camera = ({ onCapture = null }) => {

  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    const data = `${imageSrc}`.split(`data:image/jpeg;base64,`).pop();
    const imageBuffer = Buffer.from(data, 'base64');
    const imageBlob = new Blob([imageBuffer.buffer]);
    const imageFile = new File([imageBlob], 'screen.jpeg', { type: 'image/jpeg' });
    if (typeof onCapture === 'function') onCapture(imageFile);
  }, [webcamRef]);

  return (
    <div>
      <Webcam 
        audio={false}
        screenshotFormat="image/jpeg"
        ref={webcamRef}
      />
      <button onClick={capture}>
        Capture photo
      </button>
    </div>
  )
} 

export default Camera;