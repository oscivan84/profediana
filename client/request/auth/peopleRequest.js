import { apiAuth } from '../../services/apis'
import BaseRequest from '../../helpers/baseRequest'

class PeopleRequest extends BaseRequest {

    apiLib = apiAuth

    root = "/people"

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

}

export default PeopleRequest;