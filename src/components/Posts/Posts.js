import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../../services";

export default function PostDetails() {
    // let {state:post} = useLocation();
    let {id} = useParams();
    let [post, setPost] = useState({});

    useEffect(() => {
        userService.getPosts(id).then(({data})=>{
            setPost(data)
            console.log(data)
        })

    }, [id]);



    return (
        <div>
            {JSON.stringify(post)}

        </div>
    );
}

