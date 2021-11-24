import React from 'react';
import { Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';
import SizingTable from '../../common/tables/sizingTable';
import Item from './item';
import { useSelector } from 'react-redux';
import { Plus } from 'react-feather';
import { SelectDefault } from '../../common/select';
import { Search } from 'react-feather'
import TableDetalle from './tableDetalle';

const InputSearch = () => {
  return (
    <SelectDefault
      placeholder={<Search style={{ marginTop: '5px' }} size={15}/>}
    />
  );
}

const BtnAdd = () => {

  const { mode } =  useSelector(state => state.screen)

  return (
    <Button block
      outline
      style={{
        padding: "0.8em 1em"
      }}  
      color='success'
      className='text-center'
    >
      {mode == 'xs' ? 
        <Plus size={15}
          style={{ 
            marginLeft: "-2px",
            marginBottom: "-2px"
          }}
        /> 
        : 'Agregar'
      }
    </Button>
  )
}

const Register = () => {

  return (
    <Card>
      <CardHeader>
        <h5>Regístro de Ordenes</h5>
      </CardHeader>
      <CardBody>
        <TableDetalle/>
      </CardBody>
    </Card>
  )
}

export default Register;