import React, { useEffect, useMemo, useState } from 'react';
import { format } from 'currency-formatter';
import InvoiceRequest from '../../../request/kardex/invoiceRequest';
import ItemDetail from './itemDetail';

const TableDetalle = ({ invoice, total = 0, debt = 0, diff = 0, cancelled }) => {

  const invoiceRequest = new InvoiceRequest();

  const [loading, setLoading] = useState(false);
  const [datos, setDatos] = useState([]);
  const [isError, setIsError] = useState(false);

  const hideDiff = useMemo(() => {
    return cancelled ||!diff
  }, [cancelled, diff]);

  const hideDebt = useMemo(() => {
    return (debt == total) || cancelled
  }, [cancelled, debt]);

  const getDetails = async () => {
    setLoading(true);
    setIsError(false);
    await invoiceRequest.details(invoice?.id)
    .then(({ data }) => {
      setDatos(data.items);
    }).catch(() => setIsError(true));
    setLoading(false);
  }

  useEffect(() => {
    if (invoice) getDetails();
  }, [invoice]);

  return (
    <div className='table-responsive'>
      <table className="w-100  text-center">
        <thead className=" shadow-sm">
          <tr className="text-lg font-bold tracking-wide text-black bg-white border border-on-warn-300 text-center ">
            <th className="px-4 py-3 "></th>
            <th className="px-4 py-3 ">Descripción</th>
            <th className="px-4 py-3">Tipo</th>
            <th className="px-2 py-3">Precio/u</th>
            <th className="px-2 py-3">Cantidad</th>
            <th className="px-2 py-3">Total </th>
          </tr>
        </thead>
        <tbody className="bg-on-warn-100 border border-on-warn-100 text-base">
          {/* details */}
          {datos?.map((d, index) => 
              <ItemDetail
                key={`item-detail-${index}`}
                detail={d}
              />
          )}
          <tr className="border ">
            <td colSpan={5} className="text-black font-bold text-xl text-left pl-2">Total</td>
            <td className="py-2 text-lg font-bold">{format(total || 0, { code: 'COP' })}</td>
          </tr>
          {
            hideDiff ? null
            : (
              <tr className="border ">
                <td colSpan={5} className="text-black font-bold text-xl text-left pl-2">Pagado</td>
                <td className="py-2 text-lg font-bold">{format(diff || 0, { code: 'COP' })}</td>
              </tr>
            ) 
          }
          {
            hideDebt ? null 
            : (
              <tr className="border ">
                <td colSpan={5} className="text-black font-bold text-xl text-left pl-2">Deuda</td>
                <td className="py-2 text-lg font-bold">{format(debt || 0, { code: 'COP' })}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default TableDetalle;