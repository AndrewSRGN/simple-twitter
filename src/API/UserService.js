export default class UserService {
    static _baseUrl = 'https://jsonplaceholder.typicode.com/users';

    static async getAll(limit = 10, page = 1) {
        const endpoint = `${this._baseUrl}?_limit=${limit}&_page=${page}`;
        const response = await fetch(endpoint);
        const json = await response.json();
        if (Object.keys(json).length === 0) throw new Error('Users not found');
        return await json;
    }

    static async getUserById(id) {
        const endpoint = `${this._baseUrl}/${id}`;
        const response = await fetch(endpoint);
        const json = await response.json();
        if (Object.keys(json).length === 0) throw new Error('Cannot find this user');
        return json
    }
}