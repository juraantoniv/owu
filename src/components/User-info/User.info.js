
import {useLocation} from "react-router-dom";

const UserInfo = () => {
    let {state:item}=useLocation()

    return (
        <div className={'box_small'}>

            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{item.username}</div>
            <div>{item.email}</div>

        </div>
    );
};

export default UserInfo;