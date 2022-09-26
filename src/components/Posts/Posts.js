import {useLocation} from "react-router-dom";


export default function PostDetails() {
    let {state:item} = useLocation();
    console.log(useLocation())



    return (

        <div className={'box_small1'}>

                <div>{item.name}</div>
                <div>{item.email}</div>
                <div>{item.body}</div>


        </div>
    );
}

