import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import RegisterForm from './form';
import { useSelector } from 'react-redux';

const Register = () => {

  const { mode } = useSelector(state => state.screen);

  return (
    <Container fluid style={{backgroundColor: '#F7CAC9'}}>
      <Row className="m-0 mt-5">
      <Col md={11} className="mx-auto mt-5">
        <Card>
          <CardBody>
          <RegisterForm/>
          </CardBody>
        </Card>
      </Col>
    </Row>
    </Container>
    
  )
}

export default Register;