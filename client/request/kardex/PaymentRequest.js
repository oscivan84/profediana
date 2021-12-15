import { apiAuth } from '../../services/apis'
import BaseRequest from '../../helpers/baseRequest'

class PaymentRequest extends BaseRequest {

    apiLib = apiAuth

    root = "/payments"

    store(createDto = {
        invoiceId: 0,
        paymentServiceId: 0,
        price: 0,
        cancelled: true,
        datetime: 0
    }) {
        return this.requestPost(`/`, createDto);
    }
}

export default PaymentRequest;