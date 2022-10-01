
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet, Navigate
} from "react-router-dom";
import MainLayout from "./layunts/MainLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CarPage from "./pages/CarPage/CarPage";



const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/login'}/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/register'} element={<RegisterPage/>}/>
                <Route path={'/cars'} element={<CarPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};