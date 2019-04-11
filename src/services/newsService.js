import ApiService from "./apiService";

const API_URL = 'http://api.noticiasdoflamengo.com.br/';

export default class NewsService extends ApiService {
    constructor() {
        super(API_URL);
    }

    getHeadlines(query) {
        return this.get('top-headlines', query);
    }

    getEverything(query) {
        return this.get('everything', query);
    }
}
