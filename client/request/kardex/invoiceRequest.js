import { apiAuth } from '../../services/apis'
import BaseRequest from '../../helpers/baseRequest'

class InvoiceRequest extends BaseRequest {

    apiLib = apiAuth

    root = "/invoices"

    searchReceiver({ page = 1, limit = 30, querySearch }) {
        let query = `page=${page}&limit=${limit}&querySearch=${querySearch}`;
        return this.requestGet(`/search/receiver?${query}`);
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

    show(id) {
        return this.requestGet(`/${id}`)
    }

    debt(id) {
        return this.requestGet(`/${id}/debt`)
    }

    details(id) {
        return this.requestGet(`/${id}/details`);
    }
}

export default InvoiceRequest;