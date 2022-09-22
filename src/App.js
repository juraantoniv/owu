
import './App.css';
import {Users} from "./components/posts";
import PostForm from "./components/post.form";

function App() {
  return (
    <div className="App">
             <Users/>
        <div>
            <PostForm/>
        </div>
    </div>
  );
}

export default App;

