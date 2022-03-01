import React, { useState } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Badge, Row, Col } from 'reactstrap';
import { ModalContainer } from '../../../components/modales';
import { CheckboxDefault } from '../../../components/common/form';

const quantityNotes = 7;
const AddNoteModal = ({ submit, close, student, isOpen }) => {
    const [notes, setNotes] = useState([...Array(quantityNotes)].map(() => 0));
    const [brigades, setBrigades] = useState([[...Array(quantityNotes)].map(() => false)]);
    return <ModalContainer toggle={close} isOpen={isOpen} title={`Alumno : ${student.name}`} >
        <AvForm onValidSubmit={submit}>
            <Row>
                <Col>
                    <p style={{ fontSize : '1.2em', fontWeight : 'semibold' }} >
                        La nota Final es de : 
                    </p>
                </Col>
                <Col>
                    <Badge color="primary" style={{ fontSize : '1.1em' }} >
                        {(notes.filter((a) => a != NaN && a != '').reduce((a, b) => a + parseInt(b), 0) / (notes.filter((a) => a != null && a != '').length || 1)).toFixed(1)}
                    </Badge>
                </Col>
            </Row>

            <Row>
                <Col xs={10} >
                    Notas :
                </Col>
                <Col xs={1} >
                    Brigada
                </Col>
            </Row>
            {[...Array(quantityNotes)].map((value, index) => {
                return <Row>
                <Col xs={10} >
                    <AvField
                        onChange={(e) => setNotes(prev => {
                            return prev.map((note, i) => i === index ? e.target.value : note);
                        })}
                        key={index}
                        name={`note_${index + 1}`}
                        label={`Nota ${index + 1}`}
                        defaultValue={student.notes[`note_${index + 1}`]}
                        placeholder={`Ingrese la nota ${index + 1}`}
                        type="number" min="0" max="5" validate={{
                            required: {
                                value: true,
                                errorMessage: 'La nota es requirida'
                            },
                            min: {
                                value: 1,
                                errorMessage: 'La nota debe ser mayor a 0'
                            },
                            max: {
                                value: 5,
                                errorMessage: 'La nota debe ser menor o igual a 5'
                            }
                        }} 
                    />
                </Col>
                <Col xs={1} >
                    <CheckboxDefault size={35} margin={ 30 } value={brigades[index]} />
                </Col>
            </Row>})}

        </AvForm>
    </ModalContainer>
}

export default AddNoteModal;