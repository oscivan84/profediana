import React from 'react';
import { Form, Input, FormGroup, Row, Col, Label } from 'reactstrap'
import { SimpleCheckbox } from '../../utils/checkboxes'

const RoleForm = ({ form = {}, onChange = null }) => {

    const handleInput = ({ name, value }) => {
        if (typeof onChange == 'function') onChange({ name, value })
    }

    return (
        <Form>
            <Row>
                <Col md="12">
                    <FormGroup>
                        <Label>Nombre <b className="text-danger">*</b></Label>
                        <Input name="name"
                            value={form?.name || null}
                            onChange={({  target }) => handleInput(target)}
                        />
                    </FormGroup>
                </Col>

                <Col md="12">
                    <FormGroup>
                        <Label>Descripción <b className="text-danger">*</b></Label>
                        <Input name="description"
                            type="textarea"
                            value={form?.description || null}
                            onChange={({  target }) => handleInput(target)}
                        />
                    </FormGroup>
                </Col>

                <Col md="12">
                    <FormGroup className="custom-radio-ml m-checkbox-inline">
                        <SimpleCheckbox name="is_default"
                            title={<span className="digits"> DEFAULT</span>}
                            checked={form?.is_default ? true : false}
                            onChange={({ target }) => handleInput({ name: target.name, value: target.checked ? 1 : 0 })}
                        />
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}

export default RoleForm;