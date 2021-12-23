import React, { useState } from 'react';
import { SelectDefault } from '../../common/select';
import ProductRequest from '../../../request/kardex/ProductRequest';
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
} from 'reactstrap';
import Swal from 'sweetalert2';

export const CreateProduct = () => {

  const productRequest = new ProductRequest();

  const [loading, setLoading] = useState();
  const [form, setForm] = useState({});

  const handleInput = ({ name, value }, callback = null) => {
    if (typeof callback == 'function') {
      const validate = callback({ name, value });
      if (!validate) return false;
    }
    // setting
    setForm(prev => ({ ...prev, [name]: value }));
  }
  
  const convertToNumber = ({ name, value }) => {
    const newValue = Number(value).valueOf();
    return handleInput({ name, value: newValue });
  }

  const converToSelect = (obj, name) => {
    return handleInput({ name, value: obj });
  }

  const handleSave = async () => {
    setLoading(true);
    await productRequest.store({
      ...form,
      providerId: form?.providerId?.value,
      campusId: 1
    }).then(() => {
      Swal.fire({ icon: 'success', text: 'Los datos se guardarón correctamente!' });
      setForm({})

    }).catch(() => Swal.fire({ icon: 'error', text: "No se pudó guardar los datos" }))
    setLoading(false);
  }

  return (
    <Card>
      <CardHeader>
        <h5>
          Crear Producto
          <small className='ml-2'>Campos obligatorios (<b className='text-danger'>*</b>)</small>
        </h5>
      </CardHeader>
      <CardBody>
        <Form onClick={(e) => e.preventDefault()}>
          <Row>
            <Col md="6 mb-3">
              <Label>Nombre <b className='text-danger'>*</b></Label>
              <Input
                name='name'
                value={form?.name || ""}
                onChange={({ target }) => handleInput(target)}
              />
            </Col>
            <Col md="6 mb-3">
              <Label>Proveedor <b className='text-danger'>*</b></Label>
              <SelectDefault
                value={form?.providerId || ""}
                basic
                onChange={(obj) => converToSelect(obj, "providerId")}
                options={[
                  { value: 1, label: 'Default' },
                  { value: 2, label: 'Default' }
                ]}
              />
            </Col> 
            <Col md="12 mb-3">
              <Label>Descripción <b className='text-danger'>*</b></Label>
              <Input type='textarea'
                name='description'
                value={form?.description || ""}
                onChange={({ target }) => handleInput(target)}
              />
            </Col>
            <Col md="6 mb-3">
              <Label>
                Código <b className='text-danger'>*</b>
                <small className='text-muted ml-2'>{form?.code?.length || '0'}/10</small>
              </Label>
              <Input
                name='code'
                value={form?.code || ""}
                onChange={({ target }) => handleInput(target, ({ value }) => {
                  return `${value}`.length <= 10;
                })}
              />
            </Col>
            <Col md="6 mb-3">
              <Label>Stock <b className='text-danger'>*</b></Label>
              <Input type="number"
                name='stock'
                value={form?.stock || ""}
                onChange={({ target }) => convertToNumber(target)}
              />
            </Col>
            <Col md="6 mb-3">
              <Label>Precio de Compra <b className='text-danger'>*</b></Label>
              <Input type="number"
                name='purchasePrice'
                value={form?.purchasePrice || ""}
                onChange={({ target }) => convertToNumber(target)}
              />
            </Col>
            <Col md="6 mb-3">
              <Label>Precio de Venta <b className='text-danger'>*</b></Label>
              <Input type="number"
                name='salePrice'
                value={form?.salePrice || ""}
                onChange={({ target }) => convertToNumber(target)}
              />
            </Col>
            <Col md="12 text-right">
              <Button
                onClick={handleSave}
                color='primary'
                disabled={loading}
              >
                {loading ? 'Guardando...' : 'Guardar'}
              </Button>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}