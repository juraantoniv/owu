
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet, Navigate
} from "react-router-dom";
import MainLayout from "./layunts/MainLayout";
import PostsPage from "./pages/LoginPage/PostsPage";
import UsersPage from "./pages/CarPage/UsersPage";



const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'/users'} element={<UsersPage/>}/>
                <Route path={'/posts'} element={<PostsPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};