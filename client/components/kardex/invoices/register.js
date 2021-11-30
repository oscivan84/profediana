import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import TableDetalle from './tableDetalle';
import SearchDetailType from './searchDetailType';

const Register = () => {

  return (
    <Card>
      <CardHeader>
        <h5>Regístro de Ordenes</h5>
      </CardHeader>
      <CardBody>
        <SearchDetailType/>
        <TableDetalle/>
      </CardBody>
    </Card>
  )
}

export default Register;