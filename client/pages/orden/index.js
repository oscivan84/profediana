import React from "react";
import Head from "next/head";
const Orden = () => {
  return (
    <div className="payment-method text-gray-700">
      <Head>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="border shadow  mx-auto mt-20 flex flex-col px-10 py-10 ">
        <h4 className="text-xl mb-8 text-center border-b-2 pb-2">
          Detalles de la Compra
        </h4>

        <table className="w-10/12  text-center">
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
              <td className="text-black font-bold text-xl">Total</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="py-2 text-lg font-bold">$60.00</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-10">
        <label value="metodo" className="mr-10 font-semibold">Método de Pago</label>
          <select name="" id="" className="p-2 cursor-pointer w-40">
            <option value="">Efectivo</option>
            <option value="">Tarjeta</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Orden;
