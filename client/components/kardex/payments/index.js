import React, { useEffect, useMemo, useState } from 'react';
import MethodPayment from './methodPayment';
import TableDetalle from './tableDetalle';
import InvoiceRequest from '../../../request/kardex/invoiceRequest';
import moment from 'moment';

const IsCancelled = () => (
  <div className='alert alert-success mt-2'>
    El pago está efectuado...
  </div>
)

const Payment = ({ invoice }) => {

  const invoiceRequest = new InvoiceRequest();

  const [currentDebt, setCurrentDebt] = useState({})
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getDebt = async () => {
    setLoading(true);
    setIsError(false);
    await invoiceRequest.debt(invoice?.id)
    .then(res => setCurrentDebt(res.data))
    .catch(() => setIsError(true));
    setLoading(false)
  }

  const displayDate = useMemo(() => {
    return moment(invoice?.date).format('DD/MM/YYYY HH:mm');
  }, [invoice]);

  useEffect(() => {
    if (invoice) getDebt();
  }, [invoice]);

  return (
    <div className="payment-method text-gray-700">
      <div className="mx-auto mt-3 flex flex-col px-10 py-10 ">
        <h4 className="text-xl mb-8 border-b-2 pb-2">
          Detalles de la Compra: <span className='badge badge-dark font-11'>{invoice.code}</span>
          <span className='close font-11'>Fecha {displayDate}</span>
        </h4>
        <TableDetalle {...currentDebt}
          invoice={invoice}
        />

        {loading ? 'Obteniendo deuda..' : null}
        {!currentDebt?.cancelled && currentDebt?.total 
          ? <MethodPayment 
              debt={currentDebt?.debt}
              onSave={() => getDebt()}
            /> 
          : null
        }

        {currentDebt?.cancelled ? <IsCancelled/> : null}
      </div>
    </div>
  )
}

export default Payment;