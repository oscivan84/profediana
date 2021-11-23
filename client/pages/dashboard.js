import React from 'react';
import Layout from '../components/layout'
import { authorize } from '../helpers/authServerSideProps'
import { connect, useDispatch, useSelector } from 'react-redux'
import { changelang } from '../redux/thunks/languageThunk'

const DashBoard = () => {

    const dispatch =  useDispatch()
    const { lang } = useSelector(state => state.language)
    
    return (
        <Layout>
            <button onClick={() => dispatch(changelang('es'))}>
                cambiar a español
            </button>
            <div>Idioma actual: {lang}</div>
        </Layout>
    )
}

export const getServerSideProps = authorize('Dashboard')

export default connect(state => state)(DashBoard);