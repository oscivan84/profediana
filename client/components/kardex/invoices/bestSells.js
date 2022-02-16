import React, { useState } from "react";
import Table from "../../utils/table/Table";

const fakeData = [
  {
    date: "05/06/2022",
    name: "Producto 1",
    quantity: 10,
    price: 1030,
    paymenttype:"Efectivo"
  },
  {
    date: "05/06/2022",
    name: "Producto 2",
    quantity: 11,
    paymenttype:"Efectivo",
    price: 710,
  },
 
  {
    date: "05/06/2022",
    name: "Producto 6",
    quantity: 11,
    paymenttype:"Efectivo",
    price: 2100,
  },
  {
    date: "05/06/2022",
    name: "Producto 7",
    quantity: 10,
    paymenttype:"Daviplata",
    price: 2500,
  },
  {
    date: "05/06/2022",
    name: "Producto 8",
    quantity: 11,
    paymenttype:"Nequi",
    price: 3100,
  },
  {
    date: "05/06/2022",
    name: "Producto 9",
    quantity: 10,
    paymenttype:"Tarjeta",
    price: 3000,
  },
  {
    date: "05/06/2022",
    name: "Producto 10",
    quantity: 11,
    paymenttype:"Efectivo",
    price: 9700,
  },
];
const columns = [
  {
    name: "position",
    displayName: "Consecutivo Ventas",
    render: (item, index) => <span>{index + 1}</span>,
  },
  {
    keyName: "date",
    displayName: "Fecha",
  },
  {
    keyName: "price",
    displayName: "Precio de venta",
  },
  {
    keyName: "paymenttype",
    displayName: "Tipo de Pago",
  },
];

const BestSells = () => {
  const [data, setData] = useState(fakeData);
  const _seeMore = () => setData([...fakeData, ...fakeData]);
  return (
    <div>
      <Table columns={columns} data={data} itemsPerPage={10} search={true} />
      {data.length <= 10 && (
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" onClick={_seeMore}>
            Ver más
          </button>
        </div>
      )}
    </div>
  );
};

export default BestSells;
