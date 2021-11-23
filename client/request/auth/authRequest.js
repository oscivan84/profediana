import { apiAuth } from '../../services/apis'
import BaseRequest from '../../helpers/baseRequest'

class AuthRequest extends BaseRequest {

    apiLib = apiAuth

    root = "/auth"

    me (config = {}) {
        return this.requestGet('/me', config)
    }

}

export default AuthRequest;