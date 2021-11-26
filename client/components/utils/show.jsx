import React from 'react';

const Show = ({ condicion = true, children = null, predeterminado = null }) => {

    if (condicion) return children;
    return predeterminado;
}

export default Show;