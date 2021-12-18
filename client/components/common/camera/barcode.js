import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const BarcodeScannerComponent = dynamic(() => import("react-qr-barcode-scanner"), { ssr: false });
import styles from './Camera.module.scss';
import ButtonCamera from './buttonCamera';

export const BarcodeResult = ({ result, active = false }) => {
  return (
    <div className={`${styles.barcode_result} ${active ? styles.active : ''}`}>
      {result}
    </div>
  )
}

const Barcode = ({ onResult = null, defaultStream = true, active = false }) => {

  const [data, setData] = useState(null);
  const [stopStream, setStopStream] = useState(defaultStream);
  const [isError, setIsError] = useState(false);

  let intervalResult = null

  const handleUpdate = (err, result) => {
    if (!result) return;
    setData(result.text);
    setStopStream(true);
    if (typeof onResult == 'function') onResult(result.text);
  }

  const handlePermissions = () => {
    intervalResult = setInterval(() => {
      navigator?.permissions?.query({ name: 'camera' })
      .then(({ state }) => {
        if (state == 'denied') throw new Error();
        setIsError(false);
      }).catch(() => {
        setIsError(true);
        setStopStream(true);
      });
    }, 1000)
  }

  const handleToggle = () => {
    setData()
    setStopStream(prev => !prev)
  }

  useEffect(() => {
    handlePermissions();
    return () => clearInterval(intervalResult);
  }, [])
  
  return (
    <>
      <div className={styles.barcode__content}>
        {!stopStream
          ? <BarcodeScannerComponent
              facingMode='user'
              onUpdate={handleUpdate}
            />
          : <BarcodeResult result={data} active={active}/>
        }
        <ButtonCamera 
          onToggle={handleToggle}
          stop={stopStream}
        />
      </div>
      {isError ? 
        <div className='alert alert-danger mt-2'>
          No se encontró la camara o no tiene permiso de uso
        </div>
      : null}
    </>
  )
} 

export default Barcode;