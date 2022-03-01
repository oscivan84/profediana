import React, { useEffect } from 'react';
import useFormValidation from '../../../hook/useFormValidation';
import { Label, Form } from 'reactstrap';
import { SelectDefault } from '../select';
import ValidatedInput from './validatedInput';
import CheckboxController from './checkbox';

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