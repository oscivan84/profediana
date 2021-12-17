import React, { useMemo, useState } from 'react';
import { SelectDefault } from '../../common/select';
import { Button, Input, Label } from 'reactstrap';
import PaymentRequest from '../../../request/kardex/PaymentRequest';
import { useRouter } from 'next/dist/client/router';
import DragAndDrop from '../../DragAndDrop';
import Swal from 'sweetalert2'

const MethodPayment = ({ debt = 0, onSave = null }) => {

  const paymentRequest = new PaymentRequest();

  const data = [
    { value: 1, name: 'paymentServiceId', label: 'Efectivo' },
    { value: 1, name: 'paymentServiceId', label: 'Tarjeta' },
    { value: 1, name: 'paymentServiceId', label: 'Naqui' },
    { value: 1, name: 'paymentServiceId', label: 'Deviplata' },
  ];

  const [form, setForm] = useState({})
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleInput = ({ name, value }) => {
    setForm(prev => ({
      ...prev, [name]: value
    }))
  }

  const canSave = useMemo(() => {
    return form?.price && form?.paymentServiceId;
  }, [form])

  const dialogConfirm = async () => {
    return await Swal.fire({
      title: "¿Estás seguro en realizar el pago?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Guardar",
    });
  };

  const validatePrice = () => {
    const currentDebt = parseFloat(`${debt}`);
    const currentPrice = form?.price || 0;
    const diff = currentDebt - currentPrice;
    return diff >= 0;
  }

  const save = async () => {
    const { isConfirmed } = await dialogConfirm();
    if (!isConfirmed) return;
    // validar pago
    const isPayment = validatePrice();
    if (!isPayment) return Swal.fire({
      icon: 'warning',
      text: `El máximo a pagar es de ${debt}`
    });
    // enviar pago
    setLoading(true);
    await paymentRequest.store({
      ...form,
      invoiceId: router.query.id,
      cancelled: true,
      datetime: new Date().toISOString()
    }).then(async () => {
      await Swal.fire({
        icon: 'success',
        text: 'El pago se realizo correctamente!'
      })
      // pagar
      if (typeof onSave == 'function') onSave();
      // limpiar
      setForm({});
    }).catch(() => Swal.fire({
      icon: 'error', text: 'No se pudo ralizar el pago'
    }))
    setLoading(false);
  }


  return (
    <div className='row mt-3'>
      <div className='col-md-8 mb-2'>
        <DragAndDrop/>
      </div>
      <div className='col-md-4 mb-2'>
        <div className='form-group mb-2'>
          <SelectDefault
            isDisabled={loading}
            options={data}
            onChange={(obj) => handleInput(obj)}
          />
        </div>

        <div className='form-group mb-2'>
          <Label>Monto a Pagar</Label>
          <Input type='number' 
            className='input-hero'
            min={1}
            disabled={loading}
            onChange={({ target }) => handleInput(target)}
            value={form?.price || 0}
            name='price'
          />
        </div>

        <div className='form-group mb-2'>
          <Button block
            disabled={!canSave || loading}
            color='primary'
            onClick={save}
          >
            {loading ? 'Pagando...' : 'Pagar'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MethodPayment;