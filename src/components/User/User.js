import React from 'react';
import {userActions} from "../../redux";
import {useDispatch} from "react-redux";
import {postActions} from "../../redux/slices/post.slice";

const User = ({user}) => {

    const dispatch = useDispatch();
    const {id, name, username, email} = user;

    return (
        <div className={'box_small'}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <button onClick={() => dispatch(userActions.setCurrentUser(user))}>getFromAPI</button>
            <button onClick={()=>dispatch(userActions.deleteById(id))}>delete</button>
        </div>
    );
};

export default User;