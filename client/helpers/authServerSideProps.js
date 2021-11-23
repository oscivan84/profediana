import { wrapper } from '../redux/store'
import nookies from 'nookies'
import { setLogged, setToken, setUser } from '../redux/thunks/authThunk'
import { setTitle } from '../redux/thunks/screenThunk'
import AuthRequest from '../request/auth/authRequest'

export const authorize = (title = '') => wrapper.getServerSideProps(store => async (ctx) => {
    const { auth_token } = nookies.get(ctx);
    const isLogged = auth_token ? true : false;

    store.dispatch(setLogged(isLogged));

    const authRequest = new AuthRequest({ ctx })

    await authRequest.me()
    .then(res => store.dispatch(setUser(res.data)))
    .catch(() =>  store.dispatch(setLogged(false)))

    const { auth } = store.getState()

    // response error
    if (!auth.logged) {

        nookies.destroy(ctx, 'auth_token')
        store.dispatch(setUser({}))
        store.dispatch(setToken(null))

        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    } 

    // add title
    store.dispatch(setToken(auth_token))
    store.dispatch(setTitle(title))
})


export const guest = (title = '') => wrapper.getServerSideProps(store => async (ctx) => {
    const { auth_token } = nookies.get(ctx);
    const isLogged = auth_token ? true : false;

    store.dispatch(setLogged(isLogged));

    const { auth } = store.getState()

    // response error
    if (auth.logged) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    
    // add title
    store.dispatch(setUser({}))
    store.dispatch(setToken(null))
    store.dispatch(setTitle(title))
})