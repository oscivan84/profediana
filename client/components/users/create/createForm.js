import React, { useState, useEffect } from 'react';
import { StagePane, StageController } from '../../common/pane';
import { Row, TabPane } from 'reactstrap';
import { FormBasic } from '../../common/form';

const panes = [
    { key: "user", label: "Usuario", title: 'Datos del usuario' },
    { key : "institution", label : "Institución", title: 'Datos de la institución' },
    { key : "credentials", label : "Credenciales", title: 'Roles y credenciales' }
];

const CreateForm = ( {onSubmit = ( recoveredData )=>{} }) => {
    const [ currentStage, setCurrentStage ] = useState( 0 );
    const [ isLocked, setActive ] = useState(false);
    const [ recoverData, setRecoverData ] = useState({
        user : [
            { key : 'userName', label : 'Nombre' },
            { key : 'userLastName', label : 'Apellido' },
            { key : 'userNick', label : 'Nick', type: 'text' },
            { key : 'userEmail', label : 'Correo', type : 'email' },
            { key : 'userPassword', label : 'Contraseña', type : 'password' },
            { key : 'userConfirm', label : 'Confirmar contraseña', type : 'password' }
        ],
        institution:[
            { 

                key : 'campusId', label : 'Sede', type : 'select', options : [ {value : '1', label : 'Bogotá, Colombia'}, ]

            }
        ],
        credentials:[
            { 
                key : 'roleId', type : 'select', label : 'Credenciales',options : [
                    {value : '5', label : 'Estudiante'},
                    {value : '4', label : 'Vendedor'},
                    {value : '3', label : 'Profesor'},
                    {value : '2', label : 'Administrador'} 
                ] 
            }
        ]
    });
    const filter = () => {
        let sanned = {};
        Object.values( recoverData ).forEach( ( arr ) => {
            arr.forEach( ( property ) => sanned[property.key] = property.value );
        } );
        return sanned
    };
    const __Submit = () => onSubmit( filter() )
    const __UpdateData = (state) => setRecoverData( old => ({...old, [ panes[currentStage].key ] : state}) );
    useEffect( () => {
        setActive( !recoverData[ panes[currentStage].key ].every( value => value.valid ) );
    }, [ recoverData, currentStage ] );
    return (
        <Row xs={100} >
            <StagePane panes={panes} currentStage={currentStage} >
                {
                    panes.map( (pane) => 
                        <TabPane tabId={pane.key} key={`tab_pane_${pane.key}`} >
                            <FormBasic title={pane.title} inputs={recoverData[pane.key]} update={__UpdateData} />
                        </TabPane>
                    )
                }
                <StageController stages={3} onFinnally={__Submit} onChangeStage={setCurrentStage} lockNext={isLocked} />
            </StagePane>
        </Row>
    )
}

export default CreateForm