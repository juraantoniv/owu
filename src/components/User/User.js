import React from 'react';
import {Link} from "react-router-dom";


const User = ({item}) => {


    return (
        <div>

            <div>{item.name}</div>
            <span><Link to={item.id.toString()}>Single User</Link></span>


        </div>
    );
};

export default User;

