import React from 'react';
import styles from './Camera.module.scss';
import { Button } from 'reactstrap';
import { Aperture, StopCircle } from 'react-feather';

const ButtonCamera = ({ onToggle = null, stop = false }) => {
  return (
    <Button 
      className={`${styles.barcode__button} ${!stop ? styles.active : null}`} 
      onClick={onToggle}
    >
      {stop 
        ? <Aperture className={styles.barcode__icon}/> 
        : <StopCircle className={styles.barcode__icon}/>
      }
    </Button>
  );
}

export default ButtonCamera;