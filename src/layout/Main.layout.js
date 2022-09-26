import React from 'react';
import {Link} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home page</Link></li>
                <li><Link to={'/todos'}>todos </Link></li>
                <li><Link to={'/Albums'}>Albums </Link></li>
                <li><Link to={'/Comments'}>Comments </Link></li>
                <li><Link to={'/Users'}>Users </Link></li>

            </ul>

        </div>
    );
};

export default MainLayout;