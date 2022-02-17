import React, { useEffect } from 'react';
import useFormValidation from '../../../hook/useFormValidation';
import { Label, Input, FormFeedback, FormGroup, Form, Card } from 'reactstrap';
import { SelectDefault } from '../select';

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
                            : <ValidatedInput {...input} id={input.key} onInput={updateInputList} />    
                    })
                }
                { children }
            </Form>
        </>
    )
}
export default FormBasic