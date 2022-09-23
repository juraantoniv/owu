import {useEffect, useState} from "react";
import {userService} from "../../services";
import User from "../User/User";





const Users = ({getUserPost}) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data})=>{setUser(data)

        })
    }, [])


    return (
        <div>
            {user.map(user => <User key={user.id} user={user} getUserPost={getUserPost}/>)}

        </div>
    );
};

export {Users};