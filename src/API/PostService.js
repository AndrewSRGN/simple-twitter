export default class PostService {
    static _baseUrl = 'https://jsonplaceholder.typicode.com/posts';

    static async getAll(limit = 10, page = 1) {
        const endpoint = `${this._baseUrl}?_limit=${limit}&_page=${page}`;
        const response = await fetch(endpoint);
        return response.json();
    }

    static async getPostById(id) {
        const endpoint = `${this._baseUrl}/${id}`;
        const response = await fetch(endpoint);
        return response.json();
    }
}