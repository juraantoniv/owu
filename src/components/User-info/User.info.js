import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";

const UserInfo = () => {
    let {state:item}=useLocation()
    console.log(item)

    return (
        <div>

            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{item.username}</div>
            <div>{item.email}</div>

        </div>
    );
};

export default UserInfo;