import urlJoin from 'url-join'
import nookies from 'nookies'

class BaseRequest {

    apiLib = {
        post: () => null,
        get: () => null,
    }

    root = "/"

    translate = null

    ctx = null

    codeErrors = {};

    configHeaders = {
        'Content-Type': 'application/json',
        'Authorization': ''
    }

    defaultErrors = {
        ERR_CONNECTION_REFUSED: "errors.ERR_CONNECTION_REFUSED",
        E_PAYMENT_REQUIRED: "errors.E_PAYMENT_REQUIRED",
    }

    defaultMessage = "errors.DEFAULT";

    paramsDefault = {
        translate: null,
        ctx: null
    }

    constructor(params = this.paramsDefault) {
        this.translate = params?.translate;
        this.ctx = params?.ctx;
        let { auth_token } = nookies.get(this.ctx);
        this.setAuthorization(auth_token)
        this.setClientToken(process.env.NEXT_PUBLIC_CLIENT_TOKEN)
    }

    setAuthorization(token) {
        this.configHeaders.Authorization = `Bearer ${token}`
    }

    setClientToken(token) {
        this.configHeaders.ClientToken = token
    }

    setCtx(newCtx) {
        this.ctx = newCtx;
    }

    requestGet(url = '', tmpConfig = {}) {
        return new Promise(async (resolver, reject) => {
            let config = Object.assign({ headers: this.configHeaders }, tmpConfig)
            await this.apiLib.get(urlJoin(this.root, url), config)
            .then(res => resolver(res))
            .catch(err => reject(this.onError(err))) 
        })
    }

    requestPost(url = '', data = {}, tmpConfig = {}) {
        return new Promise(async (resolver, reject) => {
            let config = Object.assign({ headers: this.configHeaders }, tmpConfig)
            await this.apiLib.post(urlJoin(this.root, url), data, config)
            .then(res => resolver(res))
            .catch(err => reject(this.onError(err))) 
        })
    }

    onError(err) {
        let response = err.response || {};
        let objectError = {};
        let codeErrors = Object.assign(this.defaultErrors, this.codeErrors)
        if (Object.keys(response).length) {
            let tmpMessage = codeErrors[response.data.code] || this.defaultMessage
            let message = typeof this.translate == 'function' ? this.translate(tmpMessage) : tmpMessage
            objectError.message = message;
            objectError.code = response.data.code || 'ERR';
            objectError.errors = response.data.errors || {};
            return objectError;
        }
        
        objectError.errors = {}
        objectError.message = typeof this.translate == 'function' 
            ?   this.translate(this.defaultMessage) 
            :   this.defaultMessage;

        return objectError
    }

}

export default BaseRequest;