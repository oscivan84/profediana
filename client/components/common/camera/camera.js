import React, { useCallback, useRef } from 'react';
import styles from './Camera.module.scss';
import ButtonCamera from './buttonCamera';
import Webcam from 'react-webcam';

const Camera = ({ onCapture = null }) => {

  const webcamRef = useRef("hola");

  const videoConstraints = {
    facingMode: "user"
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    const data = `${imageSrc}`.split(`data:image/jpeg;base64,`).pop();
    const imageBuffer = Buffer.from(data, 'base64');
    const imageBlob = new Blob([imageBuffer.buffer]);
    const imageFile = new File([imageBlob], 'screen.jpeg', { type: 'image/jpeg' });
    if (typeof onCapture === 'function') onCapture(imageFile);
  }, [webcamRef]);

  return (
    <div className={`${styles.barcode__content} ${styles.camera}`}>
      <Webcam 
        audio={false}
        screenshotFormat="image/jpeg"
        ref={webcamRef}
        videoConstraints={videoConstraints}
      />
      <ButtonCamera
        stop={true}
        onToggle={capture}
      />
    </div>
  )
} 

export default Camera;