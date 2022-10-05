import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {servicesAll} from "../../services/services.all";
import Post from "../Post/Post";


const Posts = () => {

    let state = useSelector(state => state.userReducer);
    console.log(state);
    let dispatch = useDispatch();


    useEffect(() => {
        servicesAll.posts().then(({data}) =>{
            dispatch( {type : 'LOAD_POSTS',payload:data});
        });

    }, []);




    return (
        <div>
            {state.posts.map((user, index) => (<Post item={user} key={index}/>))}
        </div>
    );
};

export {Posts};