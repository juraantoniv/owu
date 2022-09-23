
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";

function App() {


  return (
    <div className="App">
        <ul>
            <li><Link to={'/'}>Home page</Link></li>
            <li><Link to={'/todos'}>todos </Link></li>
            <li><Link to={'/comments '}>comments </Link></li><li><Link to={'/drill'}>drill</Link></li>
        </ul>

    </div>
  );
}

export default App;

