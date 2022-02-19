import React, { useState, useEffect } from 'react';
import useFormValidation from '../../../hook/useFormValidation';
import { Label, Input, FormFeedback, FormGroup, Form } from 'reactstrap';
import { SelectDefault } from '../select';
import styled from 'styled-components';

const ValidatedInput = ({value, ...props}) =>{
    return <FormGroup className="position-relative" >
        <Label for={props.id} md="6">{props.label}</Label>
        <Input required type={props.type} valid={props.valid} invalid={ !props.valid && value != undefined } value={value?value:''} {...props} />
        <FormFeedback tooltip invalid>
            {
                props.message ? 
                    props.message
                    :'Es necesario llenar este campo'
            }
        </FormFeedback>
    </FormGroup>
}

const Check = styled.i.attrs( ( { isChecked = false } ) =>{
    return ({
        isChecked : isChecked
    })
})`
    display : inline-block;
    width : 20px;
    height : 20px;
    border-radius: 5px;
    margin : 0 10px;
    border: ${ props => props.isChecked ? 'none' : '2px #7366ff solid' };
    svg {
        display : ${ props => props.isChecked ? 'block' : 'none' };
        margin : 0;
        padding : 0;
        width : 22px;
        height : 22px;
        fill : #7366ff;
    }
    input { 
        display : none;
    }
`

const CheckboxController = ( { values = [], labels = [], group='', ...props } ) => {
    const [ state, setState ] = useState( values )
    const [ updated, setUpdate ] = useState(true)
    const toggle = ( index ) => {
        setUpdate(false)
        let newState = state
        newState[index] = !newState[index]
        setState( () => newState )
    }
    useEffect( () => {
        setUpdate( true )
    } )
    return state.map( (item, index) => <FormGroup onClick={ ()=>toggle(index) } >
        <Check isChecked={ item } >
            <svg viewBox="0 0 448 512"  >
                <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"/>
            </svg>
            <Input name={group} required type={props.type} checked={ item }  />
        </Check>
        <Label>{labels[index]}</Label>
    </FormGroup> )
}

const FormBasic = ({title, inputs = [], key = '', update, children = <></> }) => {
    const [ inputList, updateInputList ] = useFormValidation( inputs )
    useEffect( () => {
        update ? update( inputList ) : {}
    }, [ inputList ] )
    return (
        <>
            {title ? <h4>{title}</h4> :null}
            <Form style={{ gap:'5px', display:'grid' }} >
                {
                    inputList.map( ( input ) => {
                        return input.type === 'select' ? 
                            <><Label>{input.label}</Label><SelectDefault onChange={(e)=>updateInputList( {target : { id : input.key, value : e.value } } )} options={input.options} /></>
                            : input.type === 'checkbox' ? 
                            <CheckboxController {...input} id={input.key} />
                            : <ValidatedInput {...input} id={input.key} onInput={updateInputList} />
                    })
                }
                { children }
            </Form>
        </>
    )
}

export default FormBasic