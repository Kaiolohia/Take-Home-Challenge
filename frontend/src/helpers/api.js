import axios from "axios"

const BASE_URL = "http://localhost:3001"

export default class API {
    static async request(endpoint, data = {}, method = "get") {
        const url = `${BASE_URL}/${endpoint}`
        console.debug(`| API Call | Endpoint : ${url} | Data : ${data} | Method : ${method} |`)
        try {
            return (await axios({ url, method, data })).data
        } catch (err) {
            console.error(`| API Call failed | Response : ${err.response} |`)
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }   
    }

    static async signup(data) {
        let res = await this.request('users/', data, "post")
        return res
    }

    static async getUsers() {
        let res = await this.request('users/')
        return res
    }
}