
import PostForm from "../Post/Post";

const Posts = ({post}) => {

    return (
        <div>
            {post.map(value=> <PostForm key={value.id} post={value}/>)}

        </div>
    );
};

export {Posts};