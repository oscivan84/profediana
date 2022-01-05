import React from 'react';
import Toogle from "../../../components/toogle";
import Modal from "../../../components/modales/Modal";
import Table from '../../../components/utils/table/Table';

//TODO: convert to map and add editable option
const assistances = [];
const ModalAssistence = ({ student, close }) => {
    if (!student) return null;
    return <Modal isOpen={student != null} closeModal={close}>
        <p className="text-gray-700 font-semibold text-center text-lg">Alumno: {student.name} </p>
        <div className=" overflow-x-auto py-10 flex flex-col md:flex-row gap-y-6 md:justify-center gap-x-6">

            <div className="border p-2">

                <div className="text-center">
                    <label htmlFor="" className="text-center">Ingrese la Fecha</label>
                    <input
                        type="date"
                        defaultValue={new Date().toISOString().substring(0, 10)}
                        className="w-full text-gray-600 border mb-4 outline-none py-2 pl-4  focus:ring-gray focus:border-gray-500"
                    />
                </div>
                <div className="flex gap-x-3 justify-center">
                    <label htmlFor="">Asistio:</label>
                    <Toogle defaultChecked={true} />
                </div>
                <button className="bg-green-500 w-full hover:bg-green-400 text-white font-bold py-2 px-4 border-b-2 border-green-700 hover:border-green-500 rounded">
                    Guardar
                </button>
            </div>
            <Table className={'my-1'} columns={[
                {
                    displayName: 'Fecha',
                    keyName: 'date',
                }, {
                    displayName: 'Asistio',
                    keyName: 'asistio',
                    render: (item) => item.assistance ? 'Asistío' : (item.excuse ? 'Excusado' : 'No Asistío')
                }, {
                    displayName: 'Acciones',
                    keyName: 'actions',
                    render: (item) => <button className="bg-green-500  hover:bg-green-400 text-white font-bold py-2 px-4 border-b-2 border-green-700 hover:border-green-500 rounded">
                        Editar
                    </button>
                }
            ]} data={student.assistances} search={true} />
        </div>
    </Modal>
}

export default ModalAssistence;