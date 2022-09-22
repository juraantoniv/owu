export default function User ({user,getUserPost}){
    const {id, name, email} = user;

    return (
        <div className={'box'}>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <button onClick={() => getUserPost(id)}>getUser_Post</button>
        </div>
    );
};