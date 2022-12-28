import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../../pages/LogInPage"
import { MainPage } from '../../pages/MainPage'
// import { UserPage } from '../../pages/UserPage'

export const ProjectRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            {/* <Route path='/user' element={<UserPage />} /> */}
            <Route path='/login' element={<LoginPage />} />
        </Routes>
    )
}