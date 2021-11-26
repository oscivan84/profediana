import { apiRestaurant } from '../../services/apis'
import BaseRequest from '../../helpers/baseRequest'

class BoardRequest extends BaseRequest {

    apiLib = apiRestaurant

    root = "/boards"

    index = ({ page = 1, query_search = "", restaurant_id = "" }, config = {}) => {
        let queryString = `page=${page}&query_search=${query_search}&restaurant_id=${restaurant_id}`;
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

export default BoardRequest;