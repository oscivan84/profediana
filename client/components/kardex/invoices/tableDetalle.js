import React from 'react';
import { Table, CardFooter, Row, Col, Input, Button } from 'reactstrap';
import { useSelector } from 'react-redux'

const TableDetalle = () => {

  const { mode } = useSelector(state => state.screen);

  return (
    <>
      <div className='table-responsive'>
        <Table striped>
          <thead>
            <tr>
              <th className='text-left' width='300px'>
                Detalle de Producto
              </th>
              <th className='text-center' width='50px'>
                Precio
              </th>
              <th className='text-center' width='50px'>
                Cantidad
              </th>
              <th className='text-center' width='50px'>
                Total
              </th>
              <th className='text-center' width='40px'>
                Eliminar
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='text-center' colSpan={5}>Aún no hay productos seleccionado</th>
            </tr>
          </tbody>
        </Table>
      </div>
      <CardFooter style={{ borderTop: '2px solid #ecf3fa' }}>
        <Row>
          <Col md='8'>
            <h6>Notas</h6>
            <Input type='textarea'
              style={{ minHeight: '77%' }}
            />
          </Col>
          <Col md='4'>
            <h6 className={mode == 'xs' ? 'mt-3' : ''}>Detalles de Pago</h6>
            <div className='flex justify-between mb-3'>
              <span className='text-muted mt-2'>Total: </span>
              <b className='font-medium mt-2'>$568</b>
            </div>
            <div className='flex mt-4 justify-end'>
              <Button block 
                color='primary'
                size='lg'
              >
                Terminar
              </Button>
            </div>
          </Col>
        </Row>
      </CardFooter>
    </>
  )
}

export default TableDetalle;