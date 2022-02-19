import React, { useState } from "react";
import AddNoteModal from "./components/AddNoteModal";
import ModalAssistence from "./components/ModalAssistence";
import Table from '../../components/utils/table/Table';
import { authorize, USER_ROLE } from "../../helpers/authServerSideProps";
import { LayoutCuba } from "../../components/common/layout";
import Breadcrumb from "../../components/common/layout/breadcrumb";
import { Card, Row, Col, CardBody, CardTitle, Spinner, Button, Toast, ToastHeader, ToastBody, ListGroup, ListGroupItemText } from "reactstrap";
import { SelectDefault } from "../../components/common/select";
import { TabbedPane, SplitedPane } from "../../components/common/pane";
import BrigadeModal from "./components/BrigadeModal";

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
const members = [
  [
    {
      name: 'Juan Perez',
      photo: 'https://www.luismaram.com/wp-content/uploads/2017/02/Como-captar-mas-alumnos.jpg',
      statePayment: 'Pagado',
    },
    {
      name: 'Luis Ramirez',
      photo: 'https://www.luismaram.com/wp-content/uploads/2017/02/Como-captar-mas-alumnos.jpg',
      statePayment: 'Pagado',
    },
    {
      name: 'Marco Polo',
      photo: 'https://www.luismaram.com/wp-content/uploads/2017/02/Como-captar-mas-alumnos.jpg',
      statePayment: 'Pagado',
    }
  ],
  [
    {
      name: 'Felipe Sanchez',
      photo: 'https://www.luismaram.com/wp-content/uploads/2017/02/Como-captar-mas-alumnos.jpg',
      statePayment: 'Pagado',
    },
    {
      name: 'Francisco Cordoda',
      photo: 'https://www.luismaram.com/wp-content/uploads/2017/02/Como-captar-mas-alumnos.jpg',
      statePayment: 'Pagado',
    },
    {
      name: 'Felipe Alameda',
      photo: 'https://www.luismaram.com/wp-content/uploads/2017/02/Como-captar-mas-alumnos.jpg',
      statePayment: 'Pagado',
    }
  ],
];
const Panes = {
  INDIVIDUAL : {
    key : 'individual',
    label : 'Individual'
  },
  TEAM : {
    key : 'teams',
    label : 'Brigadas'
  }
}
const Indexes = [
  { 
    key : 'first', title : 'Nombre brigada', 
    content : <ListGroup>
      <ListGroupItemText>Integrante 1</ListGroupItemText>
      <ListGroupItemText>Integrante 2</ListGroupItemText>
      <ListGroupItemText>Integrante 3</ListGroupItemText>
      <ListGroupItemText>Integrante 4</ListGroupItemText>
    </ListGroup> 
  },
  { 
    key : 'second', title : 'Nombre brigada 2', 
    content : <ListGroup>
      <ListGroupItemText>Integrante 1</ListGroupItemText>
      <ListGroupItemText>Integrante 2</ListGroupItemText>
      <ListGroupItemText>Integrante 3</ListGroupItemText>
      <ListGroupItemText>Integrante 4</ListGroupItemText>
    </ListGroup> 
  }
]

const InfoCard = ( { title ='Default title' , actionButton = { value : '', onClick : ()=>{} }, data=[], ...props} ) => {
  return (
    <>
      <CardTitle tag="h5">
        {title}
      </CardTitle>
      { React.cloneElement(props.children, { data : data })}
      <Button color="primary" onClick={actionButton.onClick} >
        {actionButton.value}
      </Button>
    </>
  )
}

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
  const columns2 =  [
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
    }
  ];
  const [ selectedUser, setSelectedUser ] = useState( students[0] );
  const [ selectedBrigade, setSelectedBrigade ] = useState( members[0] );
  const [ assistance, setAssistance] = useState(false);
  const [ notes, setNotes] = useState(false);
  const [ brigade, setBrigade] = useState(false);
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
  const toggleBrigade = ( item ) => {
    if( item )
      setSelectedUser( item );
    setBrigade( !brigade )
  }
  const handleValidSubmit = (event, values) => {
    console.log('values', values);
  }
  return (
    <LayoutCuba>
      <Breadcrumb parent="Notas" title="Control" />
      <hr/>
      <TabbedPane panes={Panes} >
        <>
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
        </>
        <>
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
            <SplitedPane elements={Indexes} data={members} childKey='data' >
              <InfoCard actionButton={{ value:'Notas de brigada', onClick:()=>setBrigade(true) }} >
                <Table columns={columns2} data={[]} />
              </InfoCard>
            </SplitedPane>
          </Card>
        </>
      </TabbedPane>
      <AddNoteModal submit={handleValidSubmit} student={selectedUser} close={()=>toggleNotes(null)} isOpen={notes} />
      <ModalAssistence student={selectedUser} close={()=>toggleAssistence(null)} isOpen={assistance} />
      <BrigadeModal close={()=>toggleBrigade(null)} isOpen={brigade} members={selectedBrigade.map(item=>item.name)} />
    </LayoutCuba>
  );
};

export const getServerSideProps = authorize("Notas", { userRoleRequired : USER_ROLE.TEACHER });

export default Notas;
