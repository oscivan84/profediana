import React, { useState } from 'react';
import { authorize } from '../../../helpers/authServerSideProps';
import { LayoutCuba } from '../../../components/common/layout';
import Breadcrumb from '../../../components/common/layout/breadcrumb';
import { connect } from 'react-redux';
import { AvForm, AvField, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation';
import { Button, Col, Row } from 'reactstrap';

const days = [
    {
        id: 1,
        name: 'Lunes'
    },
    {
        id: 2,
        name: 'Martes'
    },
    {
        id: 3,
        name: 'Miercoles'
    },
    {
        id: 4,
        name: 'Jueves'
    },
    {
        id: 5,
        name: 'Viernes'
    },
    {
        id: 6,
        name: 'Sabado'
    },
    {
        id: 7,
        name: 'Domingo'
    }
]
const defaultScheduler = {
    start: null,
    end: null,
    day: null
};

const CreateClass = () => {
    const [toDate, setToDate] = useState(new Date());
    const [fromDate, setFromDate] = useState(new Date());
    const [schedulers, setSchedulers] = useState([defaultScheduler]);
    useState(() => {
        console.log(schedulers)
    }, [schedulers]);
    const teachers = [
        {
            id: 1,
            name: 'Teacher 1'
        }
    ]
    const kindDuration = [
        {
            id: 1,
            name: 'Horas'
        },
        {
            id: 2,
            name: 'Días'
        },
        {
            id: 3,
            name: 'Semanas'
        },
        {
            id: 4,
            name: 'Clases'
        }
    ]
    const _validSubmit = (e, values) => {
        console.log(values);
    }
    const _addScheduler = () => {
        setSchedulers([...schedulers, defaultScheduler]);
    }

    return (
        <LayoutCuba>
            <Breadcrumb parent="Clases" title="Crear clase" />
            <div className='custom-card card'>
                <AvForm onValidSubmit={_validSubmit}>
                    <Row>
                        <Col sm={12} md={6}>
                            <AvField name="from" label="Desde:" placeholder="Desde:" type="date"
                                validate={{
                                    required: { value: true, errorMessage: "La fecha de inicio es requerido" },
                                    min: {
                                        value: new Date(toDate.getFullYear(), toDate.getMonth(), toDate.getDate()),
                                        errorMessage: "La fecha no puede ser menor a la actual"
                                    }
                                }}
                            />
                        </Col>
                        <Col sm={12} md={6}>
                            <AvField name="to" label="Hasta:" placeholder="Hasta:" type="date"
                                validate={{
                                    required: { value: true, errorMessage: "La fecha final es requerido" },
                                    min: {
                                        value: new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate() + 1),
                                        errorMessage: "La fecha debe ser mayor a la fecha de inicio"
                                    },
                                }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <strong className='w-ful'>Horario:</strong>
                            {schedulers.map((scheduler, index) => <Row key={index}>
                                <Col sm={12} md={6}>
                                    <AvField type="select" name="teacher_id" label="Profesor" validate={{
                                        required: { value: true, errorMessage: "El nombre del docente es requerido" },
                                    }}>
                                        <option value="" disabled selected>Seleccionar día</option>
                                        {days.map((teacher) => <option key={teacher.id} value={teacher.id}>{teacher.name}</option>)}
                                    </AvField>
                                </Col>
                                <Col sm={12} md={2}>
                                    <AvField name={`schedulers[${index}].start`} label="Hora de inicio:" placeholder="Hora inicio:" type="time"
                                        onChange={(e) => {
                                            let newSchedulers = [...schedulers];
                                            newSchedulers[index].start = e.target.value;
                                            console.log(newSchedulers);
                                            setSchedulers(newSchedulers);
                                        }}
                                        validate={{
                                            required: { value: true, errorMessage: "La hora de inicio es requerido" },
                                        }} />
                                </Col>
                                <Col sm={12} md={2}>
                                    <AvField name={`schedulers[${index}].end`} label="Hora de fin:" placeholder="Hora fin:" type="time"
                                        onChange={(e) => {
                                            let newSchedulers = [...schedulers];
                                            newSchedulers[index].end = e.target.value;
                                            console.log(newSchedulers);
                                            setSchedulers(newSchedulers);
                                        }}
                                        validate={{
                                            required: { value: true, errorMessage: "La hora de fin es requerida" },
                                            min: (value, ctx) => value >= ctx.schedulers[index].start ? true : "La hora de fin debe ser mayor a la hora de inicio",

                                        }} />
                                </Col>
                                <Col sm={12} md={2} className='d-flex flex-column'>
                                    <label>Acciones</label>
                                    <Button color="danger" className="btn-sm " onClick={() => setSchedulers(schedulers.filter((item, i) => i !== index))}>
                                        <i className="fa fa-trash"></i>
                                    </Button>
                                </Col>
                            </Row>
                            )}
                        </Col>
                        <Col>
                            <Button color="light mb-3" type="secondary" onClick={_addScheduler}>Agregar horario</Button>
                        </Col>
                    </Row>
                    <Row>

                        <Col sm={12} md={6}>
                            <AvField type="select" name="teacher_id" label="Profesor" validate={{
                                required: { value: true, errorMessage: "El nombre del docente es requerido" },
                            }}>
                                <option value="" disabled selected>Seleccionar docente</option>
                                {teachers.map((teacher) => <option key={teacher.id} value={teacher.id}>{teacher.name}</option>)}
                            </AvField>
                        </Col>
                        <Col sm={12} md={6}>
                            <AvField name="title" label="Nombre del curso" placeholder="Nombre del curso" validate={{
                                required: { value: true, errorMessage: "El nombre de curso es requerido" },
                            }} />
                        </Col>
                        <Col sm={12} md={6}>
                            <AvField name="cupo" label="Cupo limite" type="number" placeholder="Cupo limite" validate={{
                                required: { value: true, errorMessage: "El cupo es requerido" },
                                min: { value: 1, errorMessage: "El cupo debe ser mayor a 0" },
                            }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={6}>
                            <AvField name="duration" label="Duración" type="number" placeholder="Duración" validate={{
                                required: { value: true, errorMessage: "La duración es requerida" },
                                min: { value: 1, errorMessage: "La duración debe ser mayor a 0" },
                            }} />
                        </Col>
                        <Col sm={12} md={6}>
                            <AvField type="select" name="duration_type_id" label="Tipo de duración" validate={{
                                required: { value: true, errorMessage: "El tipo de duración es requerido" },
                            }}>
                                <option value="" disabled selected>Seleccionar tipo</option>
                                {kindDuration.map((teacher) => <option key={teacher.id} value={teacher.id}>{teacher.name}</option>)}
                            </AvField>
                        </Col>
                        <Col sm={12} md={6}>
                            <Button color="primary" type="submit">Crear clase</Button>
                        </Col>
                    </Row>

                </AvForm>
                <br />
            </div>
        </LayoutCuba>
    )
};

export const getServerSideProps = authorize("Invoices");

export default connect(state => state)(CreateClass);