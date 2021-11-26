import { apiAuth } from '../../services/apis'
import BaseRequest from '../../helpers/baseRequest'

class StidentRequest extends BaseRequest {

    root = "/students"

    apiLib = apiAuth

    store(data = {}) {
        return this.requestPost('/', data)
    }

}

export default StidentRequest