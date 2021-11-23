import React from 'react';
import ObjectId from 'bson-objectid'
import { Input } from 'reactstrap'

export const Select = ({ name, value, onChange = null, options = [] }) => {
    return (
        <Input type="select"
            name={name}
            value={value || ""}
            onChange={onChange}
        >
            {options.map(opt => 
                <option key={`item-select-${new ObjectId().toHexString()}`} 
                    value={opt.value || null}
                >
                    {opt.text || null}
                </option>    
            )}
        </Input>
    )
}