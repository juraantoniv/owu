
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
import PostDetails from "./components/Post/Post";
import MainLayout from "./layout/Main.layout";
import Users from "./components/Users/Users";
import UserInfo from "./components/User-info/User.info";
import TodosPage from "./Pages/Posts";
import AlbumsPage from "./Pages/Albums";
import UsersPage from "./Pages/Users";
import CommentsPage from "./Pages/Comments";
import PostPage from "./Pages/Posts";

function App() {


  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
            <Route path={'Posts'} element={<PostPage/>}/>
            <Route path={'Comments'} element={<CommentsPage/>}/>
          </Route>
        </Routes>

    </div>
  );
}

export default App;

