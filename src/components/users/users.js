import {useEffect, useState} from "react";
import {userService} from "../../services";
import User from "../user/user";
import {UserForm} from "../form/user.form";


const Users = () => {
    const [user, setUser] = useState([]);
    console.log(user)
    useEffect(() => {
        userService.getAll().then(({data})=>{setUser(data)
        })
    }, [])

    return (
        <div>
            <UserForm setUser={setUser}/>
            <hr/>
            {user.map(value=><User key={value.id} value={value}/>)}
        </div>
    );
};

export {Users};