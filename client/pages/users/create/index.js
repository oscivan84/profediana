import React, { useState, useEffect } from 'react';
import { LayoutCuba } from '../../../components/common/layout';
import { connect } from 'react-redux';
import { authorize } from '../../../helpers/authServerSideProps';
import { CreateForm } from '../../../components/users/create';
import Breadcrumb from '../../../components/common/layout/breadcrumb';

const CreateUser = () => {
    const [ recoveredData, setRecoveredData ] = useState({})

    useEffect( () => {
        console.log( recoveredData )
    }, [ recoveredData ] )

    return (
        <LayoutCuba>  
            <Breadcrumb parent="Users" title="Registro" />
            <hr />
            <CreateForm onSubmit={setRecoveredData} />
        </LayoutCuba>
    )
};

export const getServerSideProps = authorize("users")

export default connect( state => state )(CreateUser)