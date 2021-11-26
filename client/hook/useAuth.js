import { useDispatch } from "react-redux"
import AuthRequest from "../request/auth/authRequest"
import { setUser, setLogged } from "../redux/thunks/authThunk"
import { useRouter } from 'next/router'
import { useState } from "react"

const useAuth = () => {

    const [current_loading, setCurrentLoading] = useState(false)

    const dispatch = useDispatch()

    const router = useRouter()

    const authRequest = new AuthRequest()

    const getMe = async () => {
        setCurrentLoading(true)
        await authRequest.me()
        .then(res => dispatch(setUser(res?.data || {})))
        .catch(() => {
            dispatch(setLogged(false))
            dispatch(setUser({}))
            router.push('/login')
        })
        setCurrentLoading(false)
    }

    return { current_loading, getMe }
}

export default useAuth;