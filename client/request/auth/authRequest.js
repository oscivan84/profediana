import { apiAuth } from '../../services/apis'
import BaseRequest from '../../helpers/baseRequest'

class AuthRequest extends BaseRequest {

    apiLib = apiAuth

    root = "/auth"

    profile (config = {}) {
        return this.requestGet('/profile', config)
    }

}

export default AuthRequest;