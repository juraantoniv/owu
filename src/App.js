
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";
// import Todos from "./components/todo/Todo";
import Albums from "./components/Albums/Albums";
import Comments from "./components/Comments/Comments";
import PostDetails from "./components/Posts/Posts";
import MainLayout from "./layout/Main.layout";
import Users from "./components/Users/Users";
import UserInfo from "./components/User-info/User.info";
import TodosPage from "./Pages/Todos";
import AlbumsPage from "./Pages/Albums";
import UsersPage from "./Pages/Users";
import CommentsPage from "./Pages/Comments";

function App() {


  return (
    <div className="App">
        {/*<MainLayout/>*/}
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
            <Route path={'todos'} element={<TodosPage/>}/>
            <Route path={'Albums'} element={<AlbumsPage/>}/>
            <Route path={'Users'} element={<UsersPage/>}>
            <Route path={':id'} element={<UserInfo/>}/>
                </Route>
            <Route path={'Comments'} element={<CommentsPage/>}>
            <Route path={':postId'} element={<PostDetails/>}/>
             </Route>
            </Route>

        </Routes>

    </div>
  );
}

export default App;

