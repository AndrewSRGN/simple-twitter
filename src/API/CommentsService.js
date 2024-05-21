export default class CommentsService {
    static _baseUrl = 'https://jsonplaceholder.typicode.com/comments'

    static async getAll(limit = 10, page = 1) {
        const endpoint = `${this._baseUrl}?_limit=${limit}&_page=${page}`;
        const response = await fetch(endpoint);
        return response.json();
    }

    static async getCommentsByPostId(postId) {
        const endpoint = `${this._baseUrl}?postId=${postId}`;
        const response = await fetch(endpoint);
        return response.json();
    }

    static async getCommentById(id) {
        const endpoint = `${this._baseUrl}/${id}`;
        const response = await fetch(endpoint);
        return response.json();
    }
}