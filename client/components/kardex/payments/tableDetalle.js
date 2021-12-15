import React from 'react';
import { format } from 'currency-formatter';

const TableDetalle = ({ total = 0, debt = 0, diff = 0, cancelled }) => {

  return (
    <div className='table-responsive'>
      <table className="w-100  text-center">
        <thead className=" shadow-sm">
          <tr className="text-lg font-bold tracking-wide text-black bg-white border border-on-warn-300 text-center ">
            <th className="px-4 py-3 "></th>
            <th className="px-4 py-3 ">Producto</th>
            <th className="px-4 py-3">Cantidad</th>
            <th className="px-2 py-3">Precio/u</th>
            <th className="px-2 py-3">Impuesto(I.G.V)</th>
            <th className="px-2 py-3">Total </th>
          </tr>
        </thead>
        <tbody className="bg-on-warn-100 border border-on-warn-100 text-base">
          <tr className=" font-medium ">
            <td className="px-1 py-1">
              <div className="w-10 h-10 flex justify-center items-center bg-white mx-auto rounded-full overflow-hidden">
                <img
                  className="w-full object-cover"
                  src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/02/coca-cola-portada-1877741.jpg?itok=7aBLounI"
                />
              </div>
            </td>
            <td className="px-1 py-1">Coca Cola</td>
            <td className="px-1 py-1">10</td>
            <td className="px-1 py-1">$2.00</td>
            <td className="px-1 py-1">$2.00 </td>
            <td className="px-1 py-1">$20.00 </td>
          </tr>
          <tr className=" font-medium max-h-10">
            <td className="px-1 py-1 ">
              <div className="w-10 h-10 flex justify-center items-center bg-white mx-auto rounded-full overflow-hidden">
                <img
                  className="w-full object-cover"
                  src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/02/coca-cola-portada-1877741.jpg?itok=7aBLounI"
                />
              </div>
            </td>
            <td className="px-1 py-1 ">Coca Cola</td>
            <td className="px-1 py-1">10</td>
            <td className="px-1 py-1">$2.00</td>
            <td className="px-1 py-1"> $2.00 </td>
            <td className="px-1 py-1">$20.00 </td>
          </tr>
          <tr className=" font-medium ">
            <td className="px-1 py-1">
              <div className="w-10 h-10 flex justify-center items-center bg-white mx-auto rounded-full overflow-hidden">
                <img
                  className="w-full object-cover"
                  src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/02/coca-cola-portada-1877741.jpg?itok=7aBLounI"
                />
              </div>
            </td>
            <td className="px-1 py-1">Coca Cola</td>
            <td className="px-1 py-1">10</td>
            <td className="px-1 py-1">$2.00</td>
            <td className="px-1 py-1"> $2.00 </td>
            <td className="px-1 py-1">$20.00 </td>
          </tr>
          <tr className="border ">
            <td colSpan={5} className="text-black font-bold text-xl text-left pl-2">Total</td>
            <td className="py-2 text-lg font-bold">{format(total || 0, { code: 'COP' })}</td>
          </tr>
          {
            cancelled ? null
            : (
              <tr className="border ">
                <td colSpan={5} className="text-black font-bold text-xl text-left pl-2">Pagado</td>
                <td className="py-2 text-lg font-bold">{format(diff || 0, { code: 'COP' })}</td>
              </tr>
            ) 
          }
          {
            debt ? null 
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