import { apiAuth } from '../../../services/apis'
import BaseRequest from '../../../helpers/baseRequest'

class UserRequest extends BaseRequest {

    apiLib = apiAuth

    root = "/public/users"

    resetPassword(email, config = {}) {
        return this.requestPost(`${email || '__error'}/reset_password?_method=PUT`, {}, config)
    }

    changePassword(email, data = {}, config = {}) {
        return this.requestPost(`${email || '__error'}/change_password?_method=PUT`, data, config)
    }

}

export default UserRequest;