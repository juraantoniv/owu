
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";
import Todos from "./components/todo/Todo";
import Albums from "./components/Albums/Albums";
import Comments from "./components/Comments/Comments";
import PostDetails from "./components/Posts/Posts";
import MainLayout from "./layout/Main.layout";
import Users from "./components/Users/Users";
import UserInfo from "./components/User-info/User.info";

function App() {


  return (
    <div className="App">
        <MainLayout/>
        <hr/>
        <Routes>
            <Route path={'todos'} element={<Todos/>}/>
            <Route path={'Albums'} element={<Albums/>}/>
            <Route path={'Users'} element={<Users/>}/>
            <Route path={'users/:id'} element={<UserInfo/>}>
                </Route>
            <Route path={'Comments'} element={<Comments/>}>
            <Route path={':postId'} element={<PostDetails/>}/>
             </Route>

        </Routes>

    </div>
  );
}

export default App;

