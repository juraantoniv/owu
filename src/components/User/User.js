import React from 'react';
import {userActions} from "../../redux";
import {useDispatch} from "react-redux";

const User = ({user}) => {

    const dispatch = useDispatch();
    const {id, name, username, email} = user;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <button onClick={() => dispatch(userActions.setCurrentUser(user))}>getFromAPI</button>
        </div>
    );
};

export default User;