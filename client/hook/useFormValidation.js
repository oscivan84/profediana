import { useState } from 'react'

const validationString = ( value ) => {
    const regString = /^([A-z\s])+$/g
    return regString.test( value )
}
const validationStringAndNumber = ( value ) => {
    const regString = /^([A-z\d])+$/g
    return regString.test( value )
}
const validationPassword = ( value ) => {
    const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/g
    return regPassword.test( value )
}
const validationEmail = ( value ) => {
    const regEmail = /^([A-z\d])+@{1}[A-z]+.{1}[A-z]+$/g
    return regEmail.test( value )
}
const appendMessage = ( type, value ) => {
    let message
    if( value != null && value.length > 0 )
        switch( type ){
            case 'email' : 
                message = 'El correo debe seguir el formato : ejemplo1@host.dom'
                break;
            case 'text' : 
                message = 'No puedes incluir espacios ni caracteres especiales'
                break;
            case 'password' : 
                if( value.length < 8 )
                    message = "La contraseña debe tener por lo menos 8 caracteres de longitud"
                else
                    message = 'La contraseña debe incluir por lo menos un número y un caracter especial (#,@,!,-,/)'
                break;
            default :
                message = 'Los campos de texto como nombres o apellidos solo pueden incluir letras'
                break;
        }
    else
        message = 'Es necesario llenar este campo'
    return message
}

export const validateInput = ( input ) => {
    const currentState = input
    switch( input.type ) {
        case 'email' : 
            input.valid = validationEmail( currentState.value )
            break;
        case 'password' :
            input.valid = validationPassword( currentState.value )
            break;
        case 'select' :
            input.valid = input.value !== ''
            break;
        case 'text' : 
            input.valid = validationStringAndNumber( currentState.value )
            break;
        default :
            input.valid = validationString( currentState.value )
            break;
    }
    if(!input.valid) input.message = appendMessage( input.type, input.value )
    else input.message = null
    return currentState
}

const useFormValidation = ( state ) => {
    const [ inputList, setInputList ] = useState( state )
    const updateInputList = ( event ) => {
        const inputListCopy = inputList;
        const value = event.target.value, id = event.target.id;
        let input = inputListCopy.filter( val => val.key === id )[0];
        input.value = value;
        inputListCopy[ inputListCopy.indexOf( input ) ] = { ...validateInput( input ) };
        
        setInputList( old => [...inputListCopy] );
    }
    return [ inputList, updateInputList ]
}

export default useFormValidation