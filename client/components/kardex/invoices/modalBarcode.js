import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Barcode } from '../../common/camera';
import DetailRequest from '../../../request/kardex/detailRequest';
import Swal from 'sweetalert2'

const ModalBarcode = ({ onToggle = null, onResult = null }) => {

  const detailRequest = new DetailRequest();

  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleItem = ({ type, data }) => {
    const obj = data?.items?.[0];
    if (obj) return { type, obj };
    return null;
  }

  const alertError = () => {
    Swal.fire({ icon: 'warning', text: 'No se encontró el regístro' })
  }

  const handleCode = async (code) => {
    setLoading(true);
    setIsSuccess(false);
    await detailRequest.searchType({ querySearch: code })
    .then(({ data }) => {
      for(let d of data) {
        const result = handleItem(d);
        if (typeof onResult != 'function') continue;
        if (result) {
          setIsSuccess(true);
          return onResult(result);
        }
      }
      // error de producto
      alertError();
    })
    .catch(() => alertError())
    setLoading(false);
  }

  return (
    <Modal
      isOpen
      toggle={onToggle}
    >
      <ModalHeader toggle={onToggle}>
        Buscar Producto por código de barra
      </ModalHeader>
      <ModalBody>
        <Barcode defaultStream={false}
          onResult={handleCode}
          active={isSuccess}
        />
      </ModalBody>
    </Modal>
  )
}

export default ModalBarcode;