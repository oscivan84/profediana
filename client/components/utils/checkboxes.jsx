import React from 'react';
import { Input, Label } from 'reactstrap'
import ObjectId from 'bson-objectid'

const attributes = {
    value: "",
    checked: false,
    title: null,
    onChange: null
}

export const SimpleCheckbox = (props = attributes) => {

    const id = new ObjectId();

    return (
        <div className="checkbox">
            <Input {...props} id={id.toHexString()} 
                type="checkbox" 
                onChange={props.onChange}
            />
            <Label for={id.toHexString()}>{props.title}</Label>
        </div>
    )
}