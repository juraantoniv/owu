
import {useEffect, useState} from "react";

import {userService} from "../../services";
import Todo from "../todos/Todos";


export default function Todos() {
    let [todo, setTodos] = useState([]);



    useEffect(() => {
        userService.getTodos().then(({data})=>{
            setTodos(data)
            console.log(data)
        })
    }, [])



    return (<div className={'box'}>
            {todo.map((user, index) => (<Todo item={user} key={index}/>))}
        </div>


    );
}