
import {useEffect, useState} from "react";
import {userService} from "../../services";


import PostDetails from "../Post/Post";



export default function Posts() {
    let [post,setPosts] = useState([]);



    useEffect(() => {
        userService.getPosts().then(({data})=>{
            setPosts(data)
        })
    }, [])



    return (<div className={'box'}>

            {post.map((user, index) => (<PostDetails item={user} key={index}/>))}
        </div>


    );
}