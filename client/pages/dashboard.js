import React from 'react';
import { LayoutCuba } from '../components/common/layout'
import { authorize } from '../helpers/authServerSideProps'
import { connect, useDispatch, useSelector } from 'react-redux'
import { changelang } from '../redux/thunks/languageThunk'

const DashBoard = () => {

    const dispatch =  useDispatch()
    const { lang } = useSelector(state => state.language)
    
    return (
        <LayoutCuba>
            <button onClick={() => dispatch(changelang('es'))}>
                cambiar a español
            </button>
            <div>Idioma actual: {lang}</div>
        </LayoutCuba>
    )
}

export const getServerSideProps = authorize('Dashboard')

export default connect(state => state)(DashBoard);