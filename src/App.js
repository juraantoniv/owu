
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";


import Comments from "./components/Comments/Comments";
import MainLayout from "./layout/Main.layout";
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

