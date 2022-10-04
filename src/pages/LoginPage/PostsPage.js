import React from 'react';
import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";
import Posts from "../../components/Posts/Posts";

const PostsPage = () => {


return (
        <div>
           <Posts/>
        </div>
    );
};

export default PostsPage;