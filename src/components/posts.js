import {useEffect, useState} from "react";
import {userService} from "../services";
import {PostForm} from "./post.form";



const Users = () => {
    const [user, setUser] = useState([]);
    console.log(user)
    useEffect(() => {
        userService.getAll().then(({data})=>{setUser(data)
        })
    }, [])

    return (
        <div>
            <PostForm setUser={setUser}/>
        </div>
    );
};

export {Users};