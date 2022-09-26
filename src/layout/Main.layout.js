import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Headers/Header";

const MainLayout = () => {
    return (
        <div>

            <Header/>
            <h3>Content</h3>
            <Outlet/>
        </div>
    );
};

export default MainLayout;