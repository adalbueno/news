import axios from 'axios'

export default class ApiService {
    constructor(apiUrl = '/') {
        this.apiUrl = apiUrl;
    }

    get(uri, query = {}) {
        return this.$send(uri, 'get', query);
    }

    /**
     * Create an axios request.
     *
     * @param {string} uri
     * @param {string} method
     * @param {Object} data
     * @returns {Promise}
     */
    $send(endpoint, method = 'get', data) {
        let params = {};
        if (method === 'get' || method === 'delete') {
            params = data;
            data = {};
        }

        let config = {
            method,
            url: `${this.apiUrl}${endpoint}`,
            data,
            params,
            crossdomain: true
        };

        return axios(config)
            .then((response) => response.data);
    }
}
