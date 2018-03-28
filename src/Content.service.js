import Axios from "axios";

const publicationUrl = 'https://content.thewest.com.au/publication'

export default class ContentService {
    static getArticles() {
        const config = { params: { kind: 'article' } };
        return Axios.get(publicationUrl, config)
            .then(response => response.data.documents);
    }

    static getArticleById(id) {
        return Axios.get(publicationUrl + `/${id}`)
            .then(response => response.data.items);
    }
}