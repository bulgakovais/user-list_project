import { Route, Routes } from "react-router-dom"
import { LoginPage, MainPage, UserPage } from "../../pages"
import { ProtectedRoute } from "../ProtectedRoutes"


export const ProjectRoutes = () => {
    return (
        <Routes>
            <Route element={<ProtectedRoute />}>
                <Route path='/users' element={<MainPage />} />
                <Route path='/users/:id' element={<UserPage />} />
            </Route>

            <Route path='/' element={<LoginPage />} />
        </Routes>
    )
}