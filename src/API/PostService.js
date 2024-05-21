export default class PostService {
    static _baseUrl = 'https://jsonplaceholder.typicode.com/posts';

    static async getAll(limit = 100, page = 1) {
        const endpoint = `${this._baseUrl}?_limit=${limit}&_page=${page}`;
        const response = await fetch(endpoint);
        if (response.status !== 200) {
            throw new Error(`Failed to fetch posts. Status code: ${response.status}`);
        }
        return await response.json();
    }

    static async getById(id) {
        const endpoint = `${this._baseUrl}/${id}`;
        const response = await fetch(endpoint);
        if (response.status !== 200) {
            throw new Error(`Failed to fetch post. Status code: ${response.status}`);
        }
        return await response.json();
    }
}