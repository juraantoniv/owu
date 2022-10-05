import React from 'react';
import {Link, useNavigate} from "react-router-dom";
// import css from './Header.module.css'


const Header = () => {



    return (
        <div>
            <div>

                <div><Link to={'users'}>Users</Link></div>
                <div><Link to={'posts'}>Posts</Link></div>

            </div>
        </div>
    );
};

export {Header};