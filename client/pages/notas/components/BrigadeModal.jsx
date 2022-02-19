import React, { useState } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Badge, Row, Col } from 'reactstrap';
import { ModalContainer } from '../../../components/modales';
import FormBasic from '../../../components/common/form/basicForm';

const quantityNotes = 1;


const BrigadeModal = ({ submit, close, members = [], isOpen }) => {
    console.log( members )
    const [inputs, setInputs] = useState(()=>[
        {
            type : 'checkbox',
            values : [ false, false, false ],
            labels : members,
            group : ''
        }
    ])
    return <ModalContainer toggle={close} isOpen={isOpen} title={`Brigada : `} >
        <AvForm onValidSubmit={submit}>
            <FormBasic inputs={inputs} />
            {[...Array(quantityNotes)].map((value, index) => <AvField
                key={index}
                name={`note_${index + 1}`}
                label={`Nota de brigada`}
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
            />)}
        </AvForm>
    </ModalContainer>
}

export default BrigadeModal;