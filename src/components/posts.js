import {useEffect, useState} from "react";
import {userService} from "../services";
import User from "./users";
import PostForm from "./post.form";




const Users = () => {
    const [user, setUser] = useState([]);
    const [post, setPost] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data})=>{setUser(data)

        })
    }, [])

    let getUserPost =(id)=>{
        userService.getAllP(id).then(({data})=>{
            setPost(data)
        })

    }

    return (
        <div>
            {post.map(value=> <PostForm key={value.id} post={value}/>)}
            {user.map(user => <User key={user.id} user={user} getUserPost={getUserPost}/>)}

        </div>
    );
};

export {Users};