
import {useEffect, useState} from "react";
import {userService} from "../../services";

import Comment from "../Comment/Comment";
import {Outlet} from "react-router-dom";


export default function Comments() {
    let [comment, setComment] = useState([]);



    useEffect(() => {
        userService.getComments().then(({data})=>{
            setComment(data)
            console.log(data)
        })
    }, [])



    return (<div className={'box'}>
           <div className={'out'}>

               <Outlet/>

           </div>

            {comment.map((user, index) => (<Comment item={user} key={index}/>))}
        </div>


    );
}