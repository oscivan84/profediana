import React from 'react'
import Register from '../components/register';
import { guest } from '../helpers/authServerSideProps'
import { connect } from 'react-redux';
import { LayoutHero } from '../components/common/layout';

const PageRegister = () => {

    return (
        <LayoutHero>
            <Register/>
        </LayoutHero>
    )
}

export const getServerSideProps = guest('Register')

export default connect(state => state)(PageRegister);