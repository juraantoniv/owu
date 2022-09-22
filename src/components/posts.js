import {useEffect, useState} from "react";
import {userService} from "../services";
import User from "./users";
import PostForm from "./post.form";
// import {PostForm} from "./post.form";



const Users = () => {
    const [user, setUser] = useState([]);
    const [post, setPost] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data})=>{setUser(data)
            console.log(data)
        })
    }, [])

    let getUserPost =(id)=>{
        userService.getAllP(id).then(({data})=>{
            setPost(data)
            console.log(data)


        })

    }

    return (
        <div>
            {post.map(post=> <PostForm key={post.id} post ={post}/>)}
            {user.map(user => <User key={user.id} user={user} getUserPost={getUserPost}/>)}
        </div>
    );
};

export {Users};