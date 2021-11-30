import { apiAuth } from '../../services/apis'
import BaseRequest from '../../helpers/baseRequest'

class InvoiceRequest extends BaseRequest {

    apiLib = apiAuth

    root = "/invoices"

    searchReceiver({ page = 1, limit = 30, querySearch }) {
        let query = `page=${page}&limit=${limit}&querySearch=${querySearch}`;
        return this.requestGet(`/searchReceiver?${query}`);
    }

    store(createDto = {
        transmitterType: '',
        transmitterId: 0,
        description: '', 
        date: '',
        receiverType: '', 
        receiverId: 0
    }) {
        return this.requestPost(`/`, createDto);
    }
}

export default InvoiceRequest;