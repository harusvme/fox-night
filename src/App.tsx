import "./App.css";
import { useEffect, FC, useState } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            await AuthStore.checkAuth();
            setLoading(false);
        };
        checkAuth();
    }, [AuthStore.isAuth]);

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

    const testRole = user;

    if (testRole === admin) {
        tabs = [
            { label: "Новости", link: "/news" },
            { label: "О компании", link: "/company" },
            { label: "Сотрудники", link: "/workers" },
            { label: "Аудит", link: "/admin" },
            { label: "Профиль", link: "/profile" },
        ];
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route
                    path="/admin"
                    element={AuthStore.isAuth ? <AuditPage tabs={tabs} role={testRole} /> : <Navigate to="/" />}
                />
                <Route
                    path="/news"
                    element={AuthStore.isAuth ? <NewsPage tabs={tabs} role={testRole} /> : <Navigate to="/" />}
                />
                <Route
                    path="/company"
                    element={AuthStore.isAuth ? <InfoPage tabs={tabs} role={testRole} /> : <Navigate to="/" />}
                />
                <Route
                    path="/profile"
                    element={AuthStore.isAuth ? <ProfilePage tabs={tabs} role={testRole} /> : <Navigate to="/" />}
                />
                <Route
                    path="/worktime"
                    element={AuthStore.isAuth ? <WorktimePage tabs={tabs} role={testRole} /> : <Navigate to="/" />}
                />
                <Route
                    path="/workers"
                    element={AuthStore.isAuth ? <UsersPage tabs={tabs} /> : <Navigate to="/" />}
                />

                <Route path="/users" element={<PrivateRoute />}>
                    <Route path="" element={<UsersPage tabs={tabs}/>} />
                </Route>
                <Route path="*" element={<div>404... not found </div>} />
            </Routes>
        </BrowserRouter>
    );
});

export default App;