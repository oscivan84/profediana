import React from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import Modal from "../../../components/modales/Modal";

const quantityNotes = 5;
const AddNoteModal = ({ submit, close, student }) => {
    const [notes, setNotes] = React.useState([...Array(quantityNotes)].map(() => 0));
    if(!student) return null;
    return <Modal closeModal={close} isOpen={student!=null}>
        <div className="py-10 w-80">
            <AvForm onValidSubmit={submit}>
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
                    }} />)}

                <div className="flex gap-x-6 items-center">
                    <p className="text-gray-600 text-lg">La nota Final es de:</p>
                    <p className="w-10 h-10 bg-green-600 p-2 rounded-full text-center items-center text-lg text-white">
                        {(notes.filter((a) => a != NaN && a != '').reduce((a, b) => a + parseInt(b), 0) / (notes.filter((a) => a != null && a != '').length || 1)).toFixed(1)}
                    </p>
                </div>
                <button type="submit" className="w-full mt-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Registrar Notas
                </button>
            </AvForm>
        </div>
    </Modal>
}

export default AddNoteModal;