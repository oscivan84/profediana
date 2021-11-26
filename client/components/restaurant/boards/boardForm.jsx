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
                        <Label>Número <b className="text-danger">*</b></Label>
                        <Input name="number"
                            value={form?.number || null}
                            onChange={({  target }) => handleInput(target)}
                        />
                    </FormGroup>
                </Col>

                <Col md="12">
                    <FormGroup>
                        <Label>Posición <b className="text-danger">*</b></Label>
                        <Input name="position"
                            value={form?.position || null}
                            onChange={({  target }) => handleInput(target)}
                        />
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}

export default ProductForm;