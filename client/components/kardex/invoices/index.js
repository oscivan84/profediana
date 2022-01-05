import React, { useState } from 'react';
import { TabContent, TabPane } from 'reactstrap';
import Table from '../../utils/table/Table';
import MenuPanes from './menuPanes';
import Order from './order';

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
  {
    name: "Producto 11",
    quantity: 10,
    cost: 20,
    price: 30
  },
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
  {
    name: "Producto 11",
    quantity: 10,
    cost: 20,
    price: 30
  },{
    name: "Producto 12",
    quantity: 10,
    cost: 20,
    price: 30
  },
  {
    name: "Producto 13",
    quantity: 11,
    cost: 21,
    price: 31
  },
  {
    name: "Producto 14",
    quantity: 10,
    cost: 20,
    price: 30
  },
  {
    name: "Producto 15",
    quantity: 11,
    cost: 21,
    price: 31
  },
  {
    name: "Producto 16",
    quantity: 10,
    cost: 20,
    price: 30
  },
  {
    name: "Producto 17",
    quantity: 11,
    cost: 21,
    price: 31
  },
  {
    name: "Producto 18",
    quantity: 10,
    cost: 20,
    price: 30
  },
  {
    name: "Producto 19",
    quantity: 11,
    cost: 21,
    price: 31
  },
  {
    name: "Producto 20",
    quantity: 10,
    cost: 20,
    price: 30
  },
  {
    name: "Producto 21",
    quantity: 11,
    cost: 21,
    price: 31
  },
  {
    name: "Producto 22",
    quantity: 10,
    cost: 20,
    price: 30
  },
];
const Invoices = () => {

  const panes = {
    ADD_DETALLE: {
      key: "add-detalle",
      label: "Ordenes"
    },
    CREATE_INVOICE: {
      key: "create-detalle",
      label: "Regístro"
    }
  }

  const columns = [
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
    }
  ];

  const [tabActive, setTabActive] = useState(panes.ADD_DETALLE);

  return (
    <>
      <hr />
      <MenuPanes
        options={panes}
        active={tabActive.key}
        onClick={(e, obj) => setTabActive(obj)}
      />
      <TabContent activeTab={tabActive.key}>
        <TabPane tabId={panes.CREATE_INVOICE.key}>
          < div className='d-flex w-full md:justify-content-end' >
            <a href='/kardex/createProduct' className='btn btn-primary'>
              <i className='fa fa-plus'></i>
              &nbsp;&nbsp;Nueva Orden
            </a>
          </div>
          <Table columns={columns} data={fakeData} itemsPerPage={2} search={true}/>
        </TabPane>
        <TabPane tabId={panes.ADD_DETALLE.key}>
          <Order />
        </TabPane>
      </TabContent>
    </>
  )
}

export default Invoices;