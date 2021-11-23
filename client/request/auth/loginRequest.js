import { apiAuth } from '../../services/apis'
import BaseRequest from '../../helpers/baseRequest'

class LoginRequest extends BaseRequest {

    apiLib = apiAuth

    codeErrors = {
        "E_INVALID_AUTH_PASSWORD": "La contraseña es incorrecta",
        "E_INVALID_AUTH_UID": "La cuenta de usuario no existe"
    }

    login(data = {}) {
        return this.requestPost('/login', data)
    }

    logout() {
        return this.requestPost('/logout')
    }

}

export default LoginRequest