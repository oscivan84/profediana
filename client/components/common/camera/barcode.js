import React, { useState } from 'react';
import { Button } from 'reactstrap';
import dynamic from 'next/dynamic';
const BarcodeScannerComponent = dynamic(() => import("react-qr-barcode-scanner"), { ssr: false });
import { Aperture, StopCircle } from 'react-feather';
import styles from './Camera.module.scss';

export const BarcodeResult = ({ result }) => {
  return (
    <div className={styles.barcode_result}>
      {result}
    </div>
  )
}

export const BarcodeButton = ({ onToggle = null, stop = false }) => (
  <Button 
    className={`${styles.barcode__button} ${!stop ? styles.active : null}`} 
    onClick={onToggle}
  >
    {stop 
      ? <Aperture className={styles.barcode__icon}/> 
      : <StopCircle className={styles.barcode__icon}/>
    }
  </Button>
)

const Barcode = ({ onResult = null, defaultStream = true }) => {

  const [data, setData] = useState(null);
  const [stopStream, setStopStream] = useState(defaultStream);

  const handleUpdate = (err, result) => {
    if (!result) return;
    setData(result.text);
    setStopStream(true);
    if (typeof onResult == 'function') onResult(result.text);
  }

  const handleToggle = () => {
    setData()
    setStopStream(prev => !prev)
  }
  
  return (
    <div className={styles.barcode__content}>
      {!stopStream
        ? <BarcodeScannerComponent
            onUpdate={handleUpdate}
          />
        : <BarcodeResult result={data}/>
      }
      <BarcodeButton 
        onToggle={handleToggle}
        stop={stopStream}
      />
    </div>
  )
} 

export default Barcode;