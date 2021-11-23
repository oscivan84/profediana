import React, { useEffect, useState } from 'react';
import { Form, Input, FormGroup, Row, Col, Label } from 'reactstrap'
import Show from '../../utils/show';

const UserForm = ({ form = {}, isEdit = false, onChange = null }) => {

    const handleInput = ({ name, value }) => {
        if (typeof onChange == 'function') onChange({ name, value })
    }

    const [is_modify, setIsModify] = useState(!isEdit ? true : false);

    const toggle = () => setIsModify(prev => !prev)

    useEffect(() => {
        if (!is_modify) {
            handleInput({ name: 'password', value: null }, false)
            handleInput({ name: 'password_confirmation', value: null }, false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [is_modify])

    return (
        <Form>
            <Row>
                <Col md="6">
                    <FormGroup>
                        <Label>PersonId <b className="text-danger">*</b></Label>
                        <Input name="person_id"
                            value={form?.person_id || null}
                            onChange={({  target }) => handleInput(target)}
                        />
                    </FormGroup>
                </Col>

                <Col md="6">
                    <FormGroup>
                        <Label>RoleId <b className="text-danger">*</b></Label>
                        <Input name="role_id"
                            value={form?.role_id || null}
                            onChange={({  target }) => handleInput(target)}
                        />
                    </FormGroup>
                </Col>

                <Col md="6">
                    <FormGroup>
                        <Label>Username <b className="text-danger">*</b></Label>
                        <Input name="username"
                            value={form?.username || null}
                            onChange={({  target }) => handleInput(target)}
                        />
                    </FormGroup>
                </Col>

                <Col md="6">
                    <FormGroup>
                        <Label>Email <b className="text-danger">*</b></Label>
                        <Input type="email"
                            name="email"
                            value={form?.email || null}
                            onChange={({  target }) => handleInput(target)}
                        />
                    </FormGroup>
                </Col>

                <Show condicion={isEdit}>
                    <Col md="12" className="mb-4">
                        <span className="cursor-pointer" onClick={toggle}>
                            <u className="text-primary">{is_modify ? 'Ocultar Contraseña' : 'Modificar Contraseña'}</u>
                        </span>
                    </Col>
                </Show>

                <Show condicion={is_modify}>
                    <Col md="6">
                        <FormGroup>
                            <Label>Password <b className="text-danger">*</b></Label>
                            <Input type="password"
                                name="password"
                                value={`${form?.password || ''}`}
                                onChange={({  target }) => handleInput(target)}
                            />
                        </FormGroup>
                    </Col>

                    <Col md="6">
                        <FormGroup>
                            <Label>Confirmar Contraseña <b className="text-danger">*</b></Label>
                            <Input type="password"
                                name="password_confirmation"
                                value={`${form?.password_confirmation || ''}`}
                                onChange={({  target }) => handleInput(target)}
                            />
                        </FormGroup>
                    </Col>
                </Show>
            </Row>
        </Form>
    )
}

export default UserForm;