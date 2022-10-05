import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import SingleUserDetails from "../SingleUserDetails/SingleUserDetails";

const UserInfo = () => {

    const {user} = useSelector(state => state.userReducer);

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch({type:'CHOOSE_USER', payload: +id})
    },[id]);

    return (
        <div>
            {user && (<SingleUserDetails user={user}/>)}
        </div>
    );
};

export default UserInfo;