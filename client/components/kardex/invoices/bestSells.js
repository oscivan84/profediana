import React, { useState } from 'react';
import Table from '../../utils/table/Table';

const fakeData = [
    {
        name: "Producto 1",
        quantity: 10,
        cost: 20,
        price: 30
    },
    {
        name: "Producto 2",
        quantity: 11,
        cost: 21,
        price: 31
    },
    {
        name: "Producto 3",
        quantity: 10,
        cost: 20,
        price: 30
    },
    {
        name: "Producto 4",
        quantity: 11,
        cost: 21,
        price: 31
    },
    {
        name: "Producto 5",
        quantity: 10,
        cost: 20,
        price: 30
    },
    {
        name: "Producto 6",
        quantity: 11,
        cost: 21,
        price: 31
    },
    {
        name: "Producto 7",
        quantity: 10,
        cost: 20,
        price: 30
    },
    {
        name: "Producto 8",
        quantity: 11,
        cost: 21,
        price: 31
    },
    {
        name: "Producto 9",
        quantity: 10,
        cost: 20,
        price: 30
    },
    {
        name: "Producto 10",
        quantity: 11,
        cost: 21,
        price: 31
    },
];
const columns = [
    {
        name: "position",
        displayName: "No. en ventas",
        render: (item, index) => <span>{index + 1}</span>
    },
    {
        keyName: "name",
        displayName: "Nombre",
    },
    {
        keyName: "quantity",
        displayName: "Cantidad",
    },
    {
        keyName: "cost",
        displayName: "Costo de compra",
    },
    {
        keyName: "price",
        displayName: "Precio de venta",
    },
];

const BestSells = () => {
    const [data, setData] = useState(fakeData);
    const _seeMore = () => setData([...fakeData, ...fakeData]);
    return <div>
        <Table columns={columns} data={data} itemsPerPage={10} search={true} />
        {data.length <= 10 && <div className='d-flex justify-content-center'>
            <button className='btn btn-primary' onClick={_seeMore}>Ver más</button>
        </div>}
    </div>
}

export default BestSells;