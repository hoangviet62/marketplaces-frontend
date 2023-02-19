/* eslint-disable @typescript-eslint/no-explicit-any */
import cookie from 'js-cookie';

const getCurrentUser: any = () => {
    return cookie.get("user") || null;
};

const setCurrentUser = (user: any): void => {
    cookie.set('user', user);
};

const storage = {
    getToken: () => cookie.get('token'),
    setToken: (token: string) =>
        cookie.set('token', token),
    clearToken: () => cookie.remove('token'),
};

export { storage, getCurrentUser, setCurrentUser }