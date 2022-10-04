import React from 'react';
import {combineReducers} from "redux";
import {userReducer} from "../../Redusers/Redusers";

const User = () => {

    const {userReducer}=combineReducers

    return (
        <div>
            {JSON.stringify(userReducer)}
        </div>
    );
};

export default User;

