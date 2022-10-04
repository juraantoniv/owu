import React from 'react';
import {useNavigate} from "react-router-dom";
// import css from './Header.module.css'


const Header = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div>
                <button onClick={() => navigate('/users')}>Users</button>
                <button onClick={() => navigate('/posts')}>Posts</button>
            </div>
        </div>
    );
};

export {Header};