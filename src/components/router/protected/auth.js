import AuthServices from './../../../services/AuthService';

class Auth {
    constructor() {
        const token = localStorage.getItem('accessToken');
        (token) ? this.authenticated = true : this.authenticated = false;
    }

    async login(credentials, cb) {
        const user = await AuthServices.doUserLogin(credentials);

        if(!user) {
            cb(false);
            return false;
        }

        localStorage.setItem('accessToken', user.access_token);
        this.authenticated = true;
        cb(true);
    }

    logout(cb) {
        localStorage.removeItem('accessToken');
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }

    getAccessToken() {
        return localStorage.getItem('accessToken');
    }
}

export default new Auth();