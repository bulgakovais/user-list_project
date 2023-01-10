import { Outlet } from "react-router-dom";
import { getIsAuth } from "../../store/userAuth/selectors";
import { useSelector } from "react-redux";
import { LoginPage } from "../../pages";


export const ProtectedRoute = () => {
    const isAuthed = useSelector(getIsAuth)
    return (
        isAuthed ? <Outlet /> : <LoginPage />
    )
}