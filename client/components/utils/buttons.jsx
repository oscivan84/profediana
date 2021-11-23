import React from 'react'
import { Button } from 'reactstrap'

export const FloatButton = ({ icon = null, color = 'secondary', onClick = null }) => {

    return (
        <Button color={color}
            className="float-button"
            onClick={onClick}
        >
            <span>{icon}</span>
        </Button>
    )
}