
import {useEffect, useState} from "react";
import {userService} from "../../services";


import User from "../User/User";



export default function Users() {
    let [user, setUsers] = useState([]);



    useEffect(() => {
        userService.getUsers().then(({data})=>{
            setUsers(data)
            console.log(data)
        })
    }, [])



    return (<div className={'box'}>


            {user.map((user, index) => (<User item={user} key={index}/>))}


        </div>



    );
}