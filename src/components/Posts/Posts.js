
import PostForm from "../Post/Post";

const Posts = ({post}) => {

    return (
        <div className={'box'}>
            {post.map(value=> <PostForm key={value.id} post={value}/>)}

        </div>
    );
};

export {Posts};