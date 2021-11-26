import { apiAuth } from '../../services/apis'
import BaseRequest from '../../helpers/baseRequest'

class DetailRequest extends BaseRequest {

    apiLib = apiAuth

    root = "/details"

    searchType({ page = 1, limit = 30, querySearch }) {
        let query = `page=${page}&limit=${limit}&querySearch=${querySearch}`;
        return this.requestGet(`/searchType?${query}`);
    }
}

export default DetailRequest;