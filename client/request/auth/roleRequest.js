import { apiAuth } from '../../services/apis'
import BaseRequest from '../../helpers/baseRequest'

class UserRequest extends BaseRequest {

    apiLib = apiAuth

    root = "/roles"

    index = ({ page = 1, query_search = "" }, config = {}) => {
        let queryString = `page=${page}&query_search=${query_search}`;
        return this.requestGet(`/?${queryString}`, config)
    }

    store(data = {}, config = {}) {
        return this.requestPost('/', data, config)
    }

    update(id, data = {}, config = {}) {
        return this.requestPost(`${id}?_method=PUT`, data, config)
    }

    delete(id, data = {}, config = {}) {
        return this.requestPost(`${id}?_method=DELETE`, data, config)
    }

    methods(id, config = {}) {
        return this.requestGet(`${id}/methods?perPage=100`, config)
    }

    detachMethod(id, config = {}) {
        return this.requestPost(`${id}/detach_method?_method=DELETE`, config)
    }

}

export default UserRequest;