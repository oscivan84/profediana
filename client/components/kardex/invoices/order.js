import React from 'react';
import Register from './register';
import Receiver from './receiver';
import { Row, Col } from 'reactstrap'

const Order = () => {

  return (
    <Row>
      <Col md="12" className='mb-2'>
        <Receiver/>
      </Col>
      <Col md="12" className='mb-2'>
        <Register/>
      </Col>
    </Row>
  )
}

export default Order;