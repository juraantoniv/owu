import React from 'react';
import {Link, Outlet} from "react-router-dom";

const User = ({item}) => {
    let {id,name, username,email}=item

    return (
        <div className={'box_small'}>

            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <Link to={'/users/'+id} state={{...item}}>Info</Link>

        </div>
    );
};

export default User;