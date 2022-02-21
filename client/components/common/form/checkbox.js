import React, { useState, useEffect } from 'react';
import { Input, Label, FormGroup } from 'reactstrap';
import styled from 'styled-components';

export const Check = styled.i.attrs( ( { isChecked = false, size = 22, margin = 0 } ) =>{
    return ({
        isChecked : isChecked,
        size : size,
        margin : margin
    })
})`
    display : inline-block;
    width : ${ props => (props.size-2) +'px' };
    height : ${ props => (props.size-2) +'px' };
    border-radius: 5px;
    margin : ${ props => (props.margin) +'px' } 10px 0;
    border: ${ props => props.isChecked ? 'none' : '2px #7366ff solid' };
    svg {
        display : ${ props => props.isChecked ? 'block' : 'none' };
        margin : 0;
        padding : 0;
        width : ${ props => props.size +'px' };
        height : ${ props => props.size +'px' };
        fill : #7366ff;
    }
    input { 
        display : none;
    }
`
export const CheckboxDefault = ( { value=true, group='', onChange=( isChecked )=>{}, size=22, margin=0 } ) => {
    const [ currentValue, setCurrentValue ] = useState( value );
    const toggleValue = () => {
        setCurrentValue( !currentValue );
        onChange( !currentValue );
    }
    return <Check isChecked={ currentValue } onClick={ toggleValue } size={size} margin={margin} >
        <svg viewBox="0 0 448 512"  >
            <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"/>
        </svg>
        <Input name={group} required type='checkbox' checked={ currentValue } onChange={()=>{console.log("Changes")}} />
    </Check>
}

const CheckboxController = ( { values = [], labels = [], group='', ...props } ) => {
    const [ state, setState ] = useState( values )
    const [ updated, setUpdate ] = useState(true)
    const toggle = ( index, isChecked ) => {
        setUpdate(false)
        let newState = state
        newState[index] = isChecked
        setState( () => newState )
    }
    useEffect( () => {
        setUpdate( true )
    } )
    return state.map( (item, index) => <FormGroup onClick={ ()=>toggle(index) } >
        <CheckboxDefault value={item} group={group} onChange={ (isChecked) => toggle( index, isChecked ) } />
        <Label>{labels[index]}</Label>
    </FormGroup> )
}

export default CheckboxController