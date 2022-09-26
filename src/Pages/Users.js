import React from 'react';
import Users from "../components/Users/Users";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <Outlet/>
            <Users/>

        </div>
    );
};

export default UsersPage;