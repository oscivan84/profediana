import React from 'react';
import { Form, Input, FormGroup, Row, Col, Label } from 'reactstrap'

const ProductForm = ({ form = {}, onChange = null }) => {

    const handleInput = ({ name, value }) => {
        if (typeof onChange == 'function') onChange({ name, value })
    }

    return (
        <Form>
            <Row>
                <Col md="6">
                    <FormGroup>
                        <Label>RestaurantId <b className="text-danger">*</b></Label>
                        <Input name="restaurant_id"
                            value={form?.restaurant_id || null}
                            onChange={({  target }) => handleInput(target)}
                        />
                    </FormGroup>
                </Col>

                <Col md="6">
                    <FormGroup>
                        <Label>Code <b className="text-danger">*</b></Label>
                        <Input name="code"
                            value={form?.code || null}
                            onChange={({  target }) => handleInput(target)}
                        />
                    </FormGroup>
                </Col>

                <Col md="12">
                    <FormGroup>
                        <Label>Nombre <b className="text-danger">*</b></Label>
                        <Input name="name"
                            value={form?.name || null}
                            onChange={({  target }) => handleInput(target)}
                        />
                    </FormGroup>
                </Col>

                <Col md="6">
                    <FormGroup>
                        <Label>Precio <b className="text-danger">*</b></Label>
                        <Input name="price"
                            type="number"
                            step="any"
                            value={form?.price || null}
                            onChange={({  target }) => handleInput(target)}
                            min="1"
                        />
                    </FormGroup>
                </Col>

                <Col md="6">
                    <FormGroup>
                        <Label>Cantidad <b className="text-danger">*</b></Label>
                        <Input name="amount"
                            type="number"
                            value={form?.amount || null}
                            onChange={({  target }) => handleInput(target)}
                            min="0"
                        />
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}

export default ProductForm;