import "./App.css";
import { useEffect, FC, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import AuthStore from "./store/store.ts";
import PrivateRoute from "./privateRoute.tsx";
import LoginPage from "./views/login-page";
import UsersPage from "./views/users-page";
import AuditPage from "./views/audit-page";
import NewsPage from "./views/news-page";
import InfoPage from "./views/info-page";
import ProfilePage from "./views/profile-page";
import WorktimePage from "./views/worktime-page";

const App: FC = observer(() => {
    useEffect(() => {
        AuthStore.checkAuth();
    }, []);

    let tabs = [
        { label: "Новости", link: "/news" },
        { label: "О компании", link: "/company" },
        { label: "Сотрудники", link: "/workers" },
        { label: "Часы работы", link: "/worktime" },
        { label: "Профиль", link: "/profile" },
    ];
    const admin: string = "admin";
    const hr: string = "hr";
    const user: string = "user";

    const testRole = admin;

    if (testRole === admin) {
        tabs = [
            { label: "Новости", link: "/news" },
            { label: "О компании", link: "/company" },
            { label: "Сотрудники", link: "/workers" },
            { label: "Аудит", link: "/admin" },
            { label: "Профиль", link: "/profile" },
        ];
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route
                    path="/admin"
                    element={<AuditPage tabs={tabs} role={testRole} />}
                />
                <Route
                    path="/news"
                    element={<NewsPage tabs={tabs} role={testRole} />}
                />
                <Route
                    path="/company"
                    element={<InfoPage tabs={tabs} role={testRole} />}
                />
                <Route
                    path="/profile"
                    element={<ProfilePage tabs={tabs} role={testRole} />}
                />
                <Route
                    path="/worktime"
                    element={<WorktimePage tabs={tabs} role={testRole} />}
                />
                <Route path="/workers" element={<UsersPage tabs={tabs} />} />

                <Route path="/users" element={<PrivateRoute />}>
                    <Route path="" element={<UsersPage />} />
                </Route>
                <Route path="*" element={<div>404... not found </div>} />
            </Routes>
        </BrowserRouter>
    );
});

export default App;
