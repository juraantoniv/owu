import React from 'react';
import Comments from "../components/Comments/Comments";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            {/*<div className={'box_small1'}>*/}
                <Outlet/>
            {/*</div>*/}

            <Comments/>

        </div>
    );
};

export default CommentsPage;