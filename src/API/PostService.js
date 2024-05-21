export default class PostService {
    static _baseUrl = 'https://jsonplaceholder.typicode.com/posts';

    static async getAll(limit = 10, page = 1) {
        const endpoint = `${this._baseUrl}?_limit=${limit}&_page=${page}`;
        const response = await fetch(endpoint);
        if (response.status !== 200) {
            throw new Error(`Failed to fetch posts. Status code: ${response.status}`);
        }
        const data = await response.json();
        return {
            data: data,
            totalCount: parseInt(response.headers.get('X-Total-Count'))
        }
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