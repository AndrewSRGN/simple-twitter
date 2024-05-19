export default class PostService {
    static _baseUrl = 'https://jsonplaceholder.typicode.com/posts';

    static async getAll(limit = 10, page = 1) {
        const endpoint = `${this._baseUrl}?_limit=${limit}&_page=${page}`;
        const response = await fetch(endpoint);
        const json = await response.json();
        if (Object.keys(json).length === 0) throw new Error('Posts not found');
        return json;
    }

    static async getPostById(id) {
        const endpoint = `${this._baseUrl}/${id}`;
        const response = await fetch(endpoint);
        const json = await response.json();
        if (Object.keys(json).length === 0) throw new Error('Post not found');
        return json;
    }
}