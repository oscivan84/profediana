import React, { useState } from "react";
import AddNoteModal from "./components/AddNoteModal";
import ModalAssistence from "./components/ModalAssistence";
import Table from '../../components/utils/table/Table';
import { authorize, USER_ROLE } from "../../helpers/authServerSideProps";
import { LayoutCuba } from "../../components/common/layout";
import Breadcrumb from "../../components/common/layout/breadcrumb";
import { Card, Row, Col, Spinner, Button, ListGroup, ListGroupItemText } from "reactstrap";
import { SelectDefault } from "../../components/common/select";

const profesorData = {
  name: 'Juan Perez',
  classes: [
    {
      value: 1,
      label: 'Uñas',
    },
    {
      value: 2,
      label: 'Corte de pelo',
    },
    {
      value: 3,
      label: 'Peinado',
    },
  ]
};
const students = [
  {
    name: 'Juan Perez',
    photo: 'https://www.luismaram.com/wp-content/uploads/2017/02/Como-captar-mas-alumnos.jpg',
    statePayment: 'Pagado',
    note: 4.3,
    assistances: [
      {
        date: '2020-01-01',
        assistance: true,
        excuse: true,
      },
      {
        date: '2020-01-02',
        assistance: false,
        excuse: false,
      },
      {
        date: '2020-01-01',
        assistance: true,
        excuse: true,
      },
      {
        date: '2020-01-02',
        assistance: false,
        excuse: false,
      },
      {
        date: '2020-01-03',
        assistance: false,
        excuse: true,
      },
    ],
    notes: {
      'note_1': 4.3,
      'note_2': 4.4,
      'note_3': 4.5,
      'note_4': 4.6,
      'note_5': 4.7,
      'note_6': 4.3,
    }
  }
];

const Notas = () => {
  const columns = [
    {
      keyName: 'photo',
      displayName: 'Foto',
      render: (item) => <img
        className="w-full object-cover img-thumbnail img-profile"
        style={{ width: 50, height: 50 }}
        src={item.photo} />
    }, {
      keyName: 'name',
      displayName: 'Nombre',
    }, {
      keyName: 'statePayment',
      displayName: 'Estado de pago',
      render: (item) => {
        return <>
          <Spinner
            style={{width : '20px', height : '20px', margin:'0 10px'}}
            color="success"
            type="grow"/>
          {item['statePayment']}
        </>
      }
    }, {
      keyName: 'note',
      displayName: 'Nota promedio',
    }, {
      keyName: 'assistances',
      displayName: 'Asistencias',
      render: (item) => <Button color="secondary" onClick={() => toggleAssistence(item)}>Asistencia</Button>
    },
    {
      keyName: 'notes',
      displayName: 'Notas',
      render: (item) => <Button color="primary" onClick={() => toggleNotes(item)}> Notas </Button>
    }
  ];
  const [ selectedUser, setSelectedUser ] = useState( students[0] );
  const [ assistance, setAssistance] = useState(false);
  const [ notes, setNotes] = useState(false);
  const toggleAssistence = ( item ) => {
    if( item )
      setSelectedUser( item );
    setAssistance( !assistance )
  }
  const toggleNotes = ( item ) => {
    if( item )
      setSelectedUser( item );
    setNotes( !notes )
  }
  const handleValidSubmit = (event, values) => {
    console.log('values', values);
  }
  return (
    <LayoutCuba>
      <Breadcrumb parent="Notas" title="Control" />
      <hr/>
      <Card body >
        <Row>
          <Col>
            <p className="text-base md:text-lg ">
              <label htmlFor="" className=" ">
                Profesor Asignado :  
              </label>
              <span className="font-semibold" >
                {profesorData.name}
              </span>
            </p>
          </Col>
          <Col>
            <SelectDefault options={profesorData.classes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center mt-10 text-gray-700 font-semibold text-base md:text-lg">
              Relación de Alumnos
            </p>
            <Table columns={columns} data={students} itemsPerPage={10} search={true} />
          </Col>
        </Row>
      </Card>
      <AddNoteModal submit={handleValidSubmit} student={selectedUser} close={()=>toggleNotes(null)} isOpen={notes} />
      <ModalAssistence student={selectedUser} close={()=>toggleAssistence(null)} isOpen={assistance} />
    </LayoutCuba>
  );
};

export const getServerSideProps = authorize("Notas", { userRoleRequired : USER_ROLE.TEACHER });

export default Notas;
