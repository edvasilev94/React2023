import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

export default function AuthGuardGuest() {
    const { user } = useContext(AuthContext);
    console.log(user)

    if (user.username === "") {
        return <Navigate to="/login" />
    }

    return <Outlet />
}