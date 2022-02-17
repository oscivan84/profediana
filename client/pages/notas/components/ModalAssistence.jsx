import React, { useState } from 'react';
import Toogle from "../../../components/toogle";
import { TabContent, TabPane, Button } from 'reactstrap';
import Table from '../../../components/utils/table/Table';
import MenuPanes from '../../../components/kardex/invoices/menuPanes';
import { ModalContainer } from '../../../components/modales';

const panes = {
    LIST : {
        key : 'list',
        label : 'Lista'
    },
    BY_DATE : {
        key : 'date',
        label : 'Por fecha'
    }
}
/**
 * EDITAR : 
 *  -> Imagen
 *  -> Editar estado
 */

const ModalAssistence = ({ student, isOpen, close }) => {    
    const [ tabActive, setTabActive ] = useState(panes.BY_DATE);
    return <ModalContainer isOpen={isOpen} toggle={close} title={`Alumno : ${student.name}`} >
        <MenuPanes
            options={panes}
            active={tabActive.key}
            onClick={(e, obj) => setTabActive(obj)}
        />
        <TabContent activeTab={tabActive.key} >
            <TabPane tabId={panes.LIST.key} >
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
                        render: (item) => <Button>
                            Editar
                        </Button>
                    }
                ]} data={student.assistances} search={true} />
            </TabPane>
            <TabPane tabId={panes.BY_DATE.key} >
                <label htmlFor="" className="text-center">Ingrese la Fecha</label>
                <input
                    type="date"
                    defaultValue={new Date().toISOString().substring(0, 10)}
                    className="w-full text-gray-600 border mb-4 outline-none py-2 pl-4  focus:ring-gray focus:border-gray-500"
                />
                <label htmlFor="">Asistio:</label>
                <Toogle defaultChecked={true} />
            </TabPane>
        </TabContent>
    </ModalContainer>
}

export default ModalAssistence;