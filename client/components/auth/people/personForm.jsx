import React from 'react';
import { Form, Input, FormGroup, Row, Col, Label } from 'reactstrap'
import { Select } from '../../utils/selects'

const PersonForm = ({ form = {}, onChange = null }) => {

    const handleInput = ({ name, value }) => {
        if (typeof onChange == 'function') onChange({ name, value })
    }

    return (
        <Form>
            <Row>
                <Col md="6">
                    <FormGroup>
                        <Label>Nombres <b className="text-danger">*</b></Label>
                        <Input name="name"
                            value={form?.name || null}
                            onChange={({  target }) => handleInput(target)}
                        />
                    </FormGroup>
                </Col>

                <Col md="6">
                    <FormGroup>
                        <Label>Apellido Paterno <b className="text-danger">*</b></Label>
                        <Input name="ape_pat"
                            value={form?.ape_pat || null}
                            onChange={({  target }) => handleInput(target)}
                        />
                    </FormGroup>
                </Col>

                <Col md="6">
                    <FormGroup>
                        <Label>Apellido Materno <b className="text-danger">*</b></Label>
                        <Input name="ape_mat"
                            value={form?.ape_mat || null}
                            onChange={({  target }) => handleInput(target)}
                        />
                    </FormGroup>
                </Col>

                <Col md="6">
                    <FormGroup>
                        <Label>Fecha de Nacimiento <b className="text-danger">*</b></Label>
                        <Input type="date"
                            name="date_birth"
                            value={form?.date_birth || null}
                            onChange={({  target }) => handleInput(target)}
                        />
                    </FormGroup>
                </Col>

                <Col md="6">
                    <FormGroup>
                        <Label>Género <b className="text-danger">*</b></Label>
                        <Select options={[
                            { value: "", text: "" },
                            { value: "M", text: "Masculino" },
                            { value: "F", text: "Femenino" },
                        ]}
                            name="gender"
                            value={form?.gender || null}
                            onChange={({  target }) => handleInput(target)}
                        />
                    </FormGroup>
                </Col>

                <Col md="6">
                    <FormGroup>
                        <Label>Tip. Documento <b className="text-danger">*</b></Label>
                        <Input type="text"
                            name="type_document_id"
                            value={form?.type_document_id || null}
                            onChange={({  target }) => handleInput(target)}
                        />
                    </FormGroup>
                </Col>

                <Col md="6">
                    <FormGroup>
                        <Label>N° Documento <b className="text-danger">*</b></Label>
                        <Input type="text"
                            name="document_number"
                            value={form?.document_number || null}
                            onChange={({  target }) => handleInput(target)}
                        />
                    </FormGroup>
                </Col>

                <Col md="6">
                    <FormGroup>
                        <Label>Teléfono</Label>
                        <Input type="tel"
                            name="phone"
                            value={form?.phone || null}
                            onChange={({  target }) => handleInput(target)}
                        />
                    </FormGroup>
                </Col>

                <Col md="12">
                    <FormGroup>
                        <Label>Dirección</Label>
                        <Input type="textarea"
                            name="address"
                            value={form?.address || null}
                            onChange={({  target }) => handleInput(target)}
                        />
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}

export default PersonForm;