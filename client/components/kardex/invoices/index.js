import React, { useState } from 'react';
import { Row, Col, TabContent, TabPane } from 'reactstrap';
import Register from './register';
import Receiver from './receiver';
import MenuPanes from './menuPanes';

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
          <Row>
            <Col md="4" className='mb-2'>
              <Receiver/>
            </Col>
            <Col md="8" className='mb-2'>
              <Register/>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </>
  )
}

export default Invoices;