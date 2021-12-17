import React, { useMemo } from 'react';
import { format } from 'currency-formatter';

const ItemDetail = ({ detail }) => {

  const displayType = useMemo(() => {
    const types = {
      Product: "[Producto]"
    }

    return types[detail.detailableType] || '[OTROS]'
  }, [detail]);

  const displayName = useMemo(() => {
    const names = {
      Product: detail?.detailableObject?.name
    }

    return names[detail.detailableType] || 'Desconocida'
  }, [detail]);

  const displayTotal = useMemo(() => {
    const total = parseFloat(`${detail.price}`) * parseFloat(`${detail.amount}`);
    return format(total, { code: 'COP' })
  }, [detail]);

  return (
    <tr className=" font-medium ">
      <td className="px-1 py-1">
        <div className="w-10 h-10 flex justify-center items-center bg-white mx-auto rounded-full overflow-hidden">
          <img
            className="w-full object-cover"
            src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/02/coca-cola-portada-1877741.jpg?itok=7aBLounI"
          />
        </div>
      </td>
      <td className="px-1 py-1">{displayName}</td>
      <td className="px-1 py-1">{displayType}</td>
      <td className="px-1 py-1">{format(detail.price, { code: 'COP' })}</td>
      <td className="px-1 py-1">{detail.amount}</td>
      <td className="px-1 py-1">{displayTotal}</td>
    </tr>
  )
}

export default ItemDetail;