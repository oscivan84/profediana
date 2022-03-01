import React from 'react';
import { Label, Input, FormGroup, FormFeedback } from 'reactstrap';

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
};

export default ValidatedInput;