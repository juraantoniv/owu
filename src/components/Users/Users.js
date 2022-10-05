import React, {useEffect} from 'react';
import {servicesAll} from "../../services/services.all";
import {useDispatch, useSelector} from "react-redux";
import User from "../User/User";


const Users = () => {

    let state = useSelector(state => state.userReducer);
    console.log(state);
    let dispatch = useDispatch();


    useEffect(() => {
           servicesAll.users().then(({data}) =>{
                dispatch( {type : 'LOAD_USERS',payload:data});
            });

    }, []);




    return (
        <div>
            {state.users.map((user, index) => (<User item={user} key={index}/>))}
        </div>
    );
};

export {Users};