import { apiRestaurant } from '../../services/apis'
import BaseRequest from '../../helpers/baseRequest'

class RestaurantRequest extends BaseRequest {

    apiLib = apiRestaurant

    root = "/restaurants"

    index = ({ page = 1, query_search = "", perPage = 20 }, config = {}) => {
        let queryString = `page=${page}&query_search=${query_search}&perPage=${perPage}`;
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

export default RestaurantRequest;