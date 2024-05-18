export default class UserService {
    static _baseUrl = 'https://jsonplaceholder.typicode.com/users';

    static async getAll(limit = 10, page = 1) {
        const endpoint = `${this._baseUrl}?_limit=${limit}&_page=${page}`;
        const response = await fetch(endpoint);
        return response.json();
    }

    static async getUserById(id) {
        const endpoint = `${this._baseUrl}/${id}`;
        const response = await fetch(endpoint);
        return response.json();
    }
}