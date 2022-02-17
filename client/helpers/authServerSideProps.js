import { wrapper } from '../redux/store'
import nookies from 'nookies'
import { setLogged, setToken, setUser } from '../redux/thunks/authThunk'
import { setTitle } from '../redux/thunks/screenThunk'
import AuthRequest from '../request/auth/authRequest'

export const USER_ROLE = {
    TESTER : 1,
    ADMIN : 2,
    TEACHER : 3,
    STUDENT : 4,
    CLIENT : 5
}

export const authorize = (title = '', options = { callback : null, userRoleRequired : USER_ROLE.CLIENT } ) => wrapper.getServerSideProps(store => async (ctx) => {
    const { access_token } = nookies.get(ctx);
    const isLogged = access_token ? true : false;

    store.dispatch(setLogged(isLogged));

    const authRequest = new AuthRequest({ ctx })

    await authRequest.profile()
    .then(res => store.dispatch(setUser(res.data)))
    .catch(() =>  store.dispatch(setLogged(false)))

    const { auth } = store.getState()

    // response error
    if (!auth.logged) {

        nookies.destroy(ctx, 'access_token')
        store.dispatch(setUser({}))
        store.dispatch(setToken(null))

        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    } 

    if( auth.user.roleId > options.userRoleRequired ){
        return {
            redirect: {
                destination: '/dashboard',
                permanent: false
            }
        }
    }

    // add title
    store.dispatch(setToken(access_token))
    store.dispatch(setTitle(title))
    // obtener Props
    const pageProps = typeof options.callback == 'function' ? await callback(ctx) : {};
    // response
    return {
        props: pageProps
    }
})


export const guest = (title = '') => wrapper.getServerSideProps(store => async (ctx) => {
    const { access_token } = nookies.get(ctx);
    const isLogged = access_token ? true : false;

    store.dispatch(setLogged(isLogged));

    const { auth } = store.getState()

    // response error
    if (auth.logged) {
        return {
            redirect: {
                destination: '/dashboard',
                permanent: false
            }
        }
    }
    
    // add title
    store.dispatch(setUser({}))
    store.dispatch(setToken(null))
    store.dispatch(setTitle(title))
})