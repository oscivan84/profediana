import React, { useState, useEffect } from 'react';
import ModalContainer from './ModalContainer';

const ModalConfig = ({ isOpen, title, toggle = ()=>{}, configObject = { default : 'value' }, renderMode = { default : ( item ) => <p>{item.key}{' ==> '}{item.value}</p> }, onSave = (newObject)=>{} }) => {
    const [ configuration, setNewConfiguration ] = useState( configObject )
    const changeConfig = ( key, value ) => {
        configuration[key] = value
    }
    const save = () => {
        onSave( configuration )
        toggle()
    }
    return (
        <ModalContainer isOpen={isOpen} toggle={toggle} title={title} disableBackModal onSave={save} >
            {
                Object.entries(configObject).map( (item, index) => renderMode[ item[0] ] ? 
                    React.cloneElement(renderMode[ item[0] ]( { key : item[0], value : item[1] } ), { onChange : ( state )=>changeConfig( item[0], state) }) 
                : null )
            }
        </ModalContainer>
    )
}

export default ModalConfig