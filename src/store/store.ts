import { makeAutoObservable } from "mobx";
import AuthService from "../api/api.auth.ts";

class AuthStore {
    isAuth = false;
    isAuthInProgress = false;
    authService = new AuthService();

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    async login(email: string, password: string) {
        this.isAuthInProgress = true;
        try {
            const resp = await this.authService.login(email, password);
            localStorage.setItem("token", resp.data.accessToken);
            this.isAuth = true;
        } catch (err) {
            console.log("login error");
        } finally {
            this.isAuthInProgress = false;
        }
    }

    async checkAuth() {
        this.isAuthInProgress = true;
        try {
            const resp = await this.authService.refreshToken();
            localStorage.setItem("token", resp.data.accessToken);
            this.isAuth = true;
        } catch (err) {
            console.log("login error");
        } finally {
            this.isAuthInProgress = false;
        }
    }

    async logout() {
        this.isAuthInProgress = true;
        try {
            await this.authService.logout();
            this.isAuth = false;
            localStorage.removeItem("token");
        } catch (err) {
            console.log("logout error");
        } finally {
            this.isAuthInProgress = false;
        }
    }
}

export default new AuthStore();
