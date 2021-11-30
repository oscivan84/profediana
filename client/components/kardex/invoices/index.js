import React, { useState } from 'react';
import { TabContent, TabPane } from 'reactstrap';
import MenuPanes from './menuPanes';
import Order from './order';

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

  const [tabActive, setTabActive] = useState(panes.ADD_DETALLE);

  return (
    <>
      <hr/>
      <MenuPanes 
        options={panes} 
        active={tabActive.key}
        onClick={(e, obj) => setTabActive(obj)}
      />
      <TabContent activeTab={tabActive.key}>
        <TabPane tabId={panes.CREATE_INVOICE.key}>
          Crear Panes
        </TabPane>
        <TabPane tabId={panes.ADD_DETALLE.key}>
            <Order/>
        </TabPane>
      </TabContent>
    </>
  )
}

export default Invoices;