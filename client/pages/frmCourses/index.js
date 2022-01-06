
import React, { useState } from 'react';
import { Container, Row, Col, FormGroup, Label, Input,Button, Alert } from "reactstrap";
import ProductRequest from '../../request/kardex/ProductRequest';
import { SelectDefault } from '../../components/common/select';

const FormCourses = () => {

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
     
    
      console.log("h")
    // setLoading(true);
    // await productRequest.store({
    //   ...form,
    //   providerId: form?.providerId?.value,
    //   campusId: 1
    // }).then(() => {
    //   Swal.fire({ icon: 'success', text: 'Los datos se guardarón correctamente!' });
    //   setForm({})

    // })
    //.catch(() => Swal.fire({ icon: 'error', text: "No se pudó guardar los datos" }))
    //setLoading(false);
  }

  return (
    <div>
      <Container className="p-4">
        <Row >
          <Col>
            <FormGroup>
              <Label for="beginningDate">Fecha Inicial</Label>
              <Input
                name="beginningDate"
               
                placeholder="date placeholder"
                type="date"
                value={form?.beginningDate || ""}
                onChange={({ target }) => handleInput(target)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="finalDate">Fecha Final</Label>
              <Input
                name="finalDate"
               
                placeholder="date placeholder"
                type="date"
                value={form?.finalDate || ""}
                onChange={({ target }) => handleInput(target)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label for="theacherSelect">Selecione Profesor</Label>
              <SelectDefault
                value={form?.providerId || ""}
                basic
                onChange={(obj) => converToSelect(obj, "providerId")}
                options={[
                  { value: 1, label: 'Profesor 3 santamaria 122222211111111' },
                  { value: 2, label: 'Profesor 4 santamaria 1' }
                ]}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="scheduleCourses">ingresar horario</Label>
              <Input name="scheduleCourses" 
              value={form?.scheduleCourses || ""}
              onChange={({ target }) => handleInput(target)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label for="titleCourses">Titulo del Curso</Label>
              <Input name="titleCourses"
              value={form?.titleCourses || ""}
              onChange={({ target }) => handleInput(target)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="quotaCourses">Cupo Limite</Label>
              <Input name="quotaCourses" type="number" 
              value={form?.quotaCourses || ""}
              onChange={({ target }) => convertToNumber(target)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label for="costCourses">costo</Label>
              <Input name="costCourses" type="number" 
              value={form?.costCourses || ""}
              onChange={({ target }) => convertToNumber(target)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="durationCourses">Duraccion</Label>
              <Input name="durationCourses" type="number" 
              value={form?.durationCourses || ""}
              onChange={({ target }) => convertToNumber(target)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="quantityCourses">Cantidad de clases</Label>
              <Input name="quantityCourses" type="number" 
              value={form?.quantityCourses || ""}
              onChange={({ target }) => convertToNumber(target)}
              />
            </FormGroup>
          </Col>
          <Col md="12 text-center">
              <Button
                onClick={handleSave}
                color='primary'
                disabled={loading}
              >
                {loading ? 'Guardando...' : 'Guardar'}
              </Button>
            </Col>
        </Row>
        
      </Container>
    </div>
  );
};

export default FormCourses;
