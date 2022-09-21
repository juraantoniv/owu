export default function User ({value,key}){
    const { name,username ,email} = value;

    return (
        <div className={'box'}>
            <div>{key}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>

            <hr/>
        </div>
    );
};