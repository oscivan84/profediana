import React, { useState, useEffect } from 'react';
import Toogle from "../../../components/toogle";
import { Collapse, Button } from 'reactstrap';
import Table from '../../../components/utils/table/Table';
import { ModalConfig, ModalContainer } from '../../../components/modales';

/**
 * EDITAR : 
 *  -> Imagen
 *  -> Editar estado
 */
const CurrentDate = new Date()
const defaultStudent = {
    name: 'Juan Perez',
    photo: 'https://www.luismaram.com/wp-content/uploads/2017/02/Como-captar-mas-alumnos.jpg',
    statePayment: 'Pagado',
    note: 0,
    assistances: [],
    notes: {}
}


const ToggleController = ({ content = '', value=true , onChange= ( state )=>{}, ...props}) => {
    return (
        <div style={{ display:'grid', gap:'10px', gridTemplateColumns : 'auto auto', padding : '0 10px' }} >
            <div style={{height : '80%', fontSize : '1.2em'}} >{content}</div>
            <Toogle defaultChecked={value} onChange={ onChange } />
        </div>
    )
}

const ModalAssistence = ({ student = defaultStudent, isOpen, close, updateStudentAssistance = ( newStudentData )=>{} }) => {
    const [ currentStudent, setCurrentStudent ] = useState( student );
    const [ modalOpen, setModalOpen ] = useState( false );
    const [ index, setIndex ] = useState( 0 );
    const changeIndex = (item) => {
        setIndex( student.assistances.indexOf(item) );
        toggleModal();
    }
    const changeCurrentStudent = ( newStudent ) => {
        currentStudent.assistances[index] = newStudent
    };
    const toggleModal = () => {
        setModalOpen( !modalOpen );
    };
    useEffect( () => {
        updateStudentAssistance( currentStudent );
    }, [currentStudent] );
    return <ModalContainer isOpen={isOpen} toggle={close} title={`Alumno : ${student.name}`} >
        <ToggleController value content={`Asistencia del día ( ${CurrentDate.getFullYear()}-${CurrentDate.getMonth()}-${CurrentDate.getDate()} ): `} />
        <Table className={'my-1'} itemsPerPage={6} columns={[
            {
                displayName: 'Fecha',
                keyName: 'date',
            }, {
                displayName: 'Asistio',
                keyName: 'asistio',
                render: (item) => item.assistance ? 'Asistío' : (item.excuse ? 'Justificado' : 'No Asistío')
            }, {
                displayName: 'Acciones',
                keyName: 'actions',
                render: (item) => <Button onClick={()=>changeIndex( item )} >
                    Editar
                </Button>
            }
        ]} data={currentStudent.assistances} search={true} />
        <ModalConfig isOpen={modalOpen} toggle={toggleModal} title={`Fecha `} configObject={currentStudent.assistances[index]} renderMode={{
            assistance : (item)=><ToggleController value={ item.value } content='Asistencia : ' />,
            excuse : (item)=><ToggleController value={ item.value } content='Justificado : ' />
        }} onSave={changeCurrentStudent} />

    </ModalContainer>
}

export default ModalAssistence;