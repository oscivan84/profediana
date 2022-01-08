import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const Orden = () => {
  const [paymentType, setPaymentType] = useState("");

  return (
    <div className="payment-method text-gray-700">
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
        <div className="flex items-center mt-10 text-lg">
          <div className="mt-10 my-auto">
            <label value="metodo" className="mr-10 font-semibold">
              Método de Pago
            </label>
            <select
              name=""
              id=""
              className="p-2 cursor-pointer w-40"
              onChange={(e) => {
                setPaymentType(e.target.value);
              }}
            >
              <option value="efectivo">Efectivo</option>
              <option value="tarjeta">Tarjeta</option>
              <option value="nequi">Nequi</option>
              <option value="deviplata">Deviplata</option>
            </select>
          </div>
          {paymentType === "efectivo" ? (
            <div className="grid grid-cols-2 text-lg grid-flow-col grid-rows-2  ml-14 text-center">
              <div className=" p-3">Cantidad Recibida :</div>
              <div className=" p-3">Vuelto :</div>
              <div className=" ">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Monto Recibido"
                  className="w-full text-gray-600 border mb-4 outline-none py-2 pl-4  focus:ring-gray focus:border-gray-500"
                />
              </div>

              <div className=" p-3">$ 10.00</div>
            </div>
          ) : (
            <div className="ml-10 text-center">
              <p className="text-gray-600 font-semibold text-lg">
                Comprobante de pago
              </p>
              <img
                className="max-h-40 w-40 object-cover"
                src="https://elcomercio.pe/resizer/c4gJr6NT_fLbY39wl5QZubn-pe4=/980x528/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/VAZF7VLPDRCO3MCJ4F25BI4H3U.jpg"
                alt=""
              />
            </div>
          )}
        </div>

        <div className=" w-40 ml-10 mx-auto">
          <Link href="/kardex/invoices">
            <button className="w-full my-5 bg-blue-500 mt-10 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Regresar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Orden;
