
import {useEffect, useState} from "react";
import {userService} from "../../services";

import Comment from "../Comment/Comment";



export default function Comments() {
    let [comment, setComment] = useState([]);



    useEffect(() => {
        userService.getComments().then(({data})=>{
            setComment(data)
        })
    }, [])



    return (<div className={'box'}>

            {comment.map((user, index) => (<Comment item={user} key={index}/>))}
        </div>


    );
}