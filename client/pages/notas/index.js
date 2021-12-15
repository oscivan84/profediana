import { Fragment } from "react";
import Head from "next/head";
import Modal from "../../components/modales/Modal";
import { useModal } from "../../hook/useModal";
import Toogle from "../../components/toogle";
const Notas = () => {
  const [isOpen, openModal, closeModal] = useModal(false);
  const [isOpenAsistencia, openModalAsistencia, closeModalAsistencia] =
    useModal(false);
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
              Luisa Mejilla Flores
            </p>
          </div>
          <select
            name=""
            id=""
            className="h-10  w-full md:w-auto cursor-pointer mt-8 p-2"
          >
            <option value="">Seleccione una clase</option>
            <option value="">Uñas</option>
            <option value="">Corte Pelo</option>
            <option value="">Peinados</option>
          </select>
        </div>
        <p className="text-center mt-10 text-gray-700 font-semibold text-base md:text-lg">
          Relacion de Alumnos
        </p>
        <div className=" overflow-x-auto py-2 flex md:justify-center ">
          <table className="w-10/12  text-center">
            <thead className=" shadow-sm">
              <tr className="text-lg font-bold tracking-wide text-black bg-white border border-on-warn-300 text-center ">
                <th className="px-4 py-3 ">Foto</th>
                <th className="px-4 py-3 ">Nombres</th>
                <th className="px-4 py-3">Apellidos</th>
                <th className="px-2 py-3">Nota Promedio</th>
                <th className="px-2 py-3">Asistencias</th>
                <th className="px-2 py-3">Asignar Notas</th>
              </tr>
            </thead>
            <tbody className="bg-on-warn-100 border border-on-warn-100 text-base">
              <tr className=" font-medium border-b">
                <td className="px-1 py-1">
                  <div className="w-20 h-20 flex justify-center items-center bg-white mx-auto  overflow-hidden">
                    <img
                      className="w-full object-cover"
                      src="https://www.luismaram.com/wp-content/uploads/2017/02/Como-captar-mas-alumnos.jpg"
                    />
                  </div>
                </td>
                <td className="px-1 py-1">Yessenia </td>
                <td className="px-1 py-1">Boca Negra</td>
                <td className="px-1 py-1">16</td>
                <td className="px-1 py-1">
                  <button
                    onClick={openModalAsistencia}
                    className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-2 border-green-700 hover:border-green-500 rounded"
                  >
                    Asistencia
                  </button>
                </td>
                <td className="px-1 py-1">
                  <button
                    className="  bg-blue-500  hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-2 border-blue-700 hover:border-blue-500 rounded"
                    onClick={openModal}
                  >
                    Asignar
                  </button>
                </td>
              </tr>
              <tr className=" font-medium border-b">
                <td className="px-1 py-1">
                  <div className="w-20 h-20 flex justify-center items-center bg-white mx-auto  overflow-hidden">
                    <img
                      className="w-full object-cover"
                      src="https://www.luismaram.com/wp-content/uploads/2017/02/Como-captar-mas-alumnos.jpg"
                    />
                  </div>
                </td>
                <td className="px-1 py-1">Yessenia </td>
                <td className="px-1 py-1">Boca Negra</td>
                <td className="px-1 py-1">16</td>
                <td className="px-1 py-1">
                  <button
                    onClick={openModalAsistencia}
                    className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-2 border-green-700 hover:border-green-500 rounded"
                  >
                    Asistencia
                  </button>
                </td>
                <td className="px-1 py-1">
                  <button className="  bg-blue-500  hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-2 border-blue-700 hover:border-blue-500 rounded">
                    Asignar
                  </button>
                </td>
              </tr>
              <tr className=" font-medium border-b">
                <td className="px-1 py-1">
                  <div className="w-20 h-20 flex justify-center items-center bg-white mx-auto  overflow-hidden">
                    <img
                      className="w-full object-cover"
                      src="https://www.luismaram.com/wp-content/uploads/2017/02/Como-captar-mas-alumnos.jpg"
                    />
                  </div>
                </td>
                <td className="px-1 py-1">Yessenia </td>
                <td className="px-1 py-1">Boca Negra</td>
                <td className="px-1 py-1">16</td>
                <td className="px-1 py-1">
                  <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-2 border-green-700 hover:border-green-500 rounded">
                    Asistencia
                  </button>
                </td>
                <td className="px-1 py-1">
                  <button className="  bg-blue-500  hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-2 border-blue-700 hover:border-blue-500 rounded">
                    Asignar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal para asignar Notas */}
      <Modal closeModal={closeModal} isOpen={isOpen}>
        <div className="py-10 w-80">
          <input
            type="text"
            className="w-full text-gray-600 border mb-4 outline-none py-2 pl-4  focus:ring-gray focus:border-gray-500"
            placeholder="Ingrese la Nota 1"
          />
          <input
            type="text"
            className="w-full text-gray-600 border mb-4 outline-none py-2 pl-4  focus:ring-gray focus:border-gray-500"
            placeholder="Ingrese la Nota 1"
          />
          <input
            type="text"
            className="w-full text-gray-600 border mb-4 outline-none py-2 pl-4  focus:ring-gray focus:border-gray-500"
            placeholder="Ingrese la Nota 1"
          />
          <input
            type="text"
            className="w-full text-gray-600 border mb-4 outline-none py-2 pl-4  focus:ring-gray focus:border-gray-500"
            placeholder="Ingrese la Nota 1"
          />
          <input
            type="text"
            className="w-full text-gray-600 border mb-4 outline-none py-2 pl-4  focus:ring-gray focus:border-gray-500"
            placeholder="Ingrese la Nota 1"
          />
          <div className="flex gap-x-6 items-center">
            <p className="text-gray-600 text-lg">La nota Final es de:</p>
            <p className="w-10 h-10 bg-green-600 p-2 rounded-full text-center items-center text-lg text-white">
              17
            </p>
          </div>
          <button className="w-full mt-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Registrar Notas
          </button>
        </div>
      </Modal>
      {/* Modal para asignar Asistencias */}

      <Modal isOpen={isOpenAsistencia} closeModal={closeModalAsistencia}>
        <p className="text-gray-700 font-semibold text-center text-lg">Alumno: Jose Enrique </p>
        <div className=" overflow-x-auto py-10 flex flex-col md:flex-row gap-y-6 md:justify-center gap-x-6">

          <div className="border p-2">

            <div className="text-center">
              <label htmlFor="" className="text-center">Ingrese la Fecha</label>
              <input
                type="date"
                className="w-full text-gray-600 border mb-4 outline-none py-2 pl-4  focus:ring-gray focus:border-gray-500"
              />
            </div>
            <div className="flex gap-x-3 justify-center">
              <label htmlFor="">Asistio:</label>
              <Toogle />
            </div>
            <button className="bg-green-500 w-full hover:bg-green-400 text-white font-bold py-2 px-4 border-b-2 border-green-700 hover:border-green-500 rounded">
              Guardar
            </button>
          </div>
          <table className="w-10/12  text-center">
            <thead className=" shadow-sm">
              <tr className="text-lg font-bold tracking-wide text-black bg-white border border-on-warn-300 text-center ">
                <th className="px-4 py-3 ">Fecha</th>
                <th className="px-4 py-3 ">Asistio</th>
                <th className="px-4 py-3 ">Acción</th>
              </tr>
            </thead>
            <tbody className="bg-on-warn-100 border border-on-warn-100 text-base">
              <tr className=" font-medium border-b">
                <td className="px-1 py-1">10/12/2021 </td>
                <td className="px-1 py-1">Si</td>
                <td className="px-1 py-1">
                  <button className="bg-green-500  hover:bg-green-400 text-white font-bold py-2 px-4 border-b-2 border-green-700 hover:border-green-500 rounded">
                    Editar
                  </button>
                </td>

              </tr>
              <tr className=" font-medium border-b">
                <td className="px-1 py-1">10/12/2021 </td>
                <td className="px-1 py-1">Si</td>
                <td className="px-1 py-1">
                  <button className="bg-green-500  hover:bg-green-400 text-white font-bold py-2 px-4 border-b-2 border-green-700 hover:border-green-500 rounded">
                    Editar
                  </button>
                </td>
              </tr>
              <tr className=" font-medium border-b">
                <td className="px-1 py-1">10/12/2021 </td>
                <td className="px-1 py-1">Si</td>
                <td className="px-1 py-1">
                  <button className="bg-green-500  hover:bg-green-400 text-white font-bold py-2 px-4 border-b-2 border-green-700 hover:border-green-500 rounded">
                    Editar
                  </button>
                </td>
              </tr>
              <tr className=" font-medium border-b">
                <td className="px-1 py-1">10/12/2021 </td>
                <td className="px-1 py-1">Si</td>
                <td className="px-1 py-1">
                  <button className="bg-green-500  hover:bg-green-400 text-white font-bold py-2 px-4 border-b-2 border-green-700 hover:border-green-500 rounded">
                    Editar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Notas;
