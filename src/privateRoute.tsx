import { Navigate, Outlet } from "react-router-dom";
import authStore from "./store/store.ts";
import { observer } from "mobx-react-lite";

const PrivateRoute = () => {
    if (authStore.isAuthInProgress) {
        return <div>Checking auth...</div>;
    }
    if (authStore.isAuth) {
        return <Outlet />;
    } else {
        return <Navigate to="/" />;
    }
};

export default observer(PrivateRoute);
