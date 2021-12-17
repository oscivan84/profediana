import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Barcode from '../../common/camera/barcode';
import DetailRequest from '../../../request/kardex/detailRequest';
import Swal from 'sweetalert2'

const ModalBarcode = ({ onToggle = null, onResult = null }) => {

  const detailRequest = new DetailRequest();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const handleItem = ({ type, data }) => {
    const obj = data?.items?.[0];
    if (obj) return { type, obj };
    return null;
  }

  const handleCode = async (code) => {
    setLoading(true);
    await detailRequest.searchType({ querySearch: code })
    .then(({ data }) => {
      for(let d of data) {
        const result = handleItem(d);
        if (typeof onResult != 'function') continue;
        if (result) {
          onResult(result);
          break;
        }
      }
    })
    .catch(() => Swal.fire({ icon: 'warning', text: 'No se encontró el regístro' }))
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
        />
      </ModalBody>
    </Modal>
  )
}

export default ModalBarcode;