import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

export default function AuthGuardUser() {
    const { user } = useContext(AuthContext);

    if (user.username != "") {
        return <Navigate to="/404" />
    }

    return <Outlet />
}