import React, {useEffect} from 'react';
import {servicesAll} from "../../services/services.all";
import {useDispatch, useSelector} from "react-redux";
import User from "../User/User";

const Users = () => {

    let state = useSelector(state => state.userReducer);
    console.log(state);
    let dispatch = useDispatch();


    useEffect(() => {

           servicesAll.users.then(value => value.json())
            .then(value => {
                dispatch( {type : 'LOAD_USERS',payload:value});
            });

    }, []);


    return (
        <div>
            <User/>
        </div>
    );
};

export default Users;