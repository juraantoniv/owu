
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

function App() {


  return (
    <div className="App">
        <ul>
            <li><Link to={'/'}>Home page</Link></li>
            <li><Link to={'/todos'}>todos </Link></li>
            <li><Link to={'/Albums'}>Albums </Link></li>
            <li><Link to={'/Comments'}>Comments </Link></li>

        </ul>

        <hr/>
        <Routes>
            {/* root path - /        */}
            {/*<Route path={'/'} element={<Home/>}/>*/}
            <Route path={'todos'} element={<Todos/>}/>
            <Route path={'Albums'} element={<Albums/>}/>
            <Route path={'Comments'} element={<Comments/>}/>

        </Routes>

    </div>
  );
}

export default App;

