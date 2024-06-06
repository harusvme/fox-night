import { instance } from "./api.config.ts";

export default class AuthService {
    login(login: string, password: string) {
        return instance.post("/auth/login", { login, password });
    }

    refreshToken() {
        return instance.get("/api/v1/auth/refresh-token");
    }

    logout() {
        return instance.post("/api/logout");
    }
}
