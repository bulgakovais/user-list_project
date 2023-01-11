import { Route, Routes } from "react-router-dom"
import { SignUpPage, MainPage, UserPage, LogInPage } from "../../pages"
import { ProtectedRoute } from "../ProtectedRoutes"


export const ProjectRoutes = () => {
    return (
        <Routes>
            <Route element={<ProtectedRoute />}>
                <Route path='/users' element={<MainPage />} />
                <Route path='/users/:id' element={<UserPage />} />
            </Route>

            <Route path='/' element={<SignUpPage />} />
            <Route path='/auth' element={<LogInPage />} />
        </Routes>
    )
}