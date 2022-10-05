
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet, Navigate
} from "react-router-dom";
import MainLayout from "./layunts/MainLayout";
import PostsPage from "./pages/PostsPage/PostsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import UsrIDPage from "./pages/UserIDPage/UsrIDPage";



const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'/users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UsrIDPage/>}/>
                    </Route>
                <Route path={'/posts'} element={<PostsPage/>}/>

            </Route>
        </Routes>
    );
};

export {App};