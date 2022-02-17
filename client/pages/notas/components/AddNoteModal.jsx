import React from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Badge, Row, Col } from 'reactstrap';
import { ModalContainer } from '../../../components/modales';

const quantityNotes = 5;
const AddNoteModal = ({ submit, close, student, isOpen }) => {
    const [notes, setNotes] = React.useState([...Array(quantityNotes)].map(() => 0));
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
            {[...Array(quantityNotes)].map((value, index) => <AvField
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
                }
            
            } 
            />)}
        </AvForm>
    </ModalContainer>
}

export default AddNoteModal;