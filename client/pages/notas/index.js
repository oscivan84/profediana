import { Fragment, useState } from "react";
import Head from "next/head";
import Modal from "../../components/modales/Modal";
import AddNoteModal from "./components/AddNoteModal";
import ModalAssistence from "./components/ModalAssistence";
import Table from '../../components/utils/table/Table';
import { authorize, USER_ROLE } from "../../helpers/authServerSideProps";

const Notas = () => {
  const profesorData = {
    name: 'Juan Perez',
    classes: [
      {
        id: 1,
        name: 'Uñas',
      },
      {
        id: 2,
        name: 'Corte de pelo',
      },
      {
        id: 3,
        name: 'Peinado',
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
      }
    }
  ];
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
    }, {
      keyName: 'note',
      displayName: 'Nota promedio',
    }, {
      keyName: 'assistances',
      displayName: 'Asistencias',
      render: (item) => <button type="button" onClick={() => setSelectedStudentAssistance(item)}
        className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-2 border-green-700 hover:border-green-500 rounded">
        Asistencia
      </button>
    },
    {
      keyName: 'notes',
      displayName: 'Notas',
      render: (item) => <button type="button" className="  bg-blue-500  hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-2 border-blue-700 hover:border-blue-500 rounded"
        onClick={() => setSelectedStudentNote(item)}
      > Notas </button>
    }];
  const [selectedStudentAssistance, setSelectedStudentAssistance] = useState(null);
  const [selectedStudentNote, setSelectedStudentNote] = useState(null);
  const handleValidSubmit = (event, values) => {
    console.log('values', values);
  }
  return (
    <Fragment>
      <Head>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <div className=" w-120 mx-2">
        <div className="flex flex-col md:flex-row gap-y-4 items-center justify-center gap-x-6">
          <div className="flex md:gap-x-6 gap-x-2 border-b-2  border-black  justify-items-center pt-10 text-gray-600 text-base md:text-lg ">
            <label htmlFor="" className=" ">
              Profesor Asignado:
            </label>
            <p className="text-gray-700 font-semibold text-base md:text-lg ">
              {profesorData.name}
            </p>
          </div>
          <select
            name=""
            id=""
            className="h-10  w-full md:w-auto cursor-pointer mt-8 p-2"
          >
            <option value="" disabled>Seleccione una clase</option>
            {profesorData.classes.map((clase) => <option value={clase.id} key={clase.id}>{clase.name}</option>)}
          </select>
        </div>
        <p className="text-center mt-10 text-gray-700 font-semibold text-base md:text-lg">
          Relación de Alumnos
        </p>
        <div className="px-4 mx-auto">
          <Table columns={columns} data={students} itemsPerPage={10} search={true} />
        </div>
      </div>

      {/* Modal para asignar Notas */}
      <AddNoteModal submit={handleValidSubmit} student={selectedStudentNote} close={()=>setSelectedStudentNote(null)} />
      {/* Modal para asignar Asistencias */}
      <ModalAssistence student={selectedStudentAssistance} close={()=>setSelectedStudentAssistance(null)} />
    </Fragment>
  );
};

export const getServerSideProps = authorize("Notas", { userRoleRequired : USER_ROLE.TEACHER });

export default Notas;
