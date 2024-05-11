import { instance } from "./api.config.ts";

export default class AuthService {
    login(email: string, password: string) {
        return instance.post("/api/v1/auth/login", { email, password });
    }

    refreshToken() {
        return instance.get("/api/v1/auth/refresh-token");
    }

    logout() {
        return instance.post("/api/logout");
    }
}
