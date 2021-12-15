import React, { useEffect, useState } from 'react';
import MethodPayment from './methodPayment';
import TableDetalle from './tableDetalle';
import InvoiceRequest from '../../../request/kardex/invoiceRequest';

const IsCancelled = () => (
  <div className='alert alert-success mt-2'>
    El pago está efectuado...
  </div>
)

const Payment = ({ id }) => {

  const invoiceRequest = new InvoiceRequest();

  const [currentDebt, setCurrentDebt] = useState({})
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getDebt = async () => {
    setLoading(true);
    setIsError(false);
    await invoiceRequest.debt(id)
    .then(res => setCurrentDebt(res.data))
    .catch(() => setIsError(true));
    setLoading(false)
  }

  useEffect(() => {
    if (id) getDebt();
  }, [id]);

  return (
    <div className="payment-method text-gray-700">
      <div className="mx-auto mt-3 flex flex-col px-10 py-10 ">
        <h4 className="text-xl mb-8 text-center border-b-2 pb-2">
          Detalles de la Compra
        </h4>
        <TableDetalle {...currentDebt}/>

        {loading ? 'Obteniendo deuda..' : null}
        {!currentDebt?.cancelled && currentDebt?.total 
          ? <MethodPayment debt={currentDebt?.debt}/> 
          : null
        }

        {currentDebt?.cancelled ? <IsCancelled/> : null}
      </div>
    </div>
  )
}

export default Payment;