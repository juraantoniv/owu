
import './App.css';
import {userService} from "./services";
import {useState} from "react";
import {Posts, Users} from "./components";

function App() {

    const [post, setPost] = useState([]);

    let getUserPost =(id)=>{
        userService.getPosts(id).then(({data})=>{
            setPost(data)
        })
    }
  return (
    <div className="App">
             <Users getUserPost ={getUserPost}/>
        <div>
            <Posts  post ={post} />
        </div>
    </div>
  );
}

export default App;

