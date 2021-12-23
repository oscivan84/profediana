import { apiAuth } from '../../services/apis'
import BaseRequest from '../../helpers/baseRequest'

class ProductRequest extends BaseRequest {

    apiLib = apiAuth

    root = "/products"

    store(createDto = {
        providerId: 0,
        campusId: 0,
        purchasePrice: 0,
        salePrice: 0,
        name: "",
        description: ""
    }) {
        return this.requestPost(`/`, createDto);
    }
}

export default ProductRequest;