export default class AuthService {

    /**
     * Returns true if user is authenticated
     *
     * @returns {boolean}
     */
    static get isAuthenticated() {
        return !!localStorage.getItem('token');
    }
}