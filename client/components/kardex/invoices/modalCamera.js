import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Camera } from '../../common/camera';

const ModalCamera = ({ onToggle = null, onResult = null }) => {

  const handleImage = (image) => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(image);
    a.target = '__blank';
    a.click();
  }

  return (
    <Modal
      fullscreen='lg'
      size='lg'
      isOpen
      toggle={onToggle}
    >
      <ModalHeader toggle={onToggle}>
        Tomar Foto
      </ModalHeader>
      <ModalBody>
        <Camera onCapture={handleImage}/>
      </ModalBody>
    </Modal>
  )
}

export default ModalCamera;