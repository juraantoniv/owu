
import {useEffect, useState} from "react";

import {userService} from "../../services";
import Album from "../Album/Album";


export default function Albums() {
    let [album, setAlbum] = useState([]);



    useEffect(() => {
        userService.getAlbums().then(({data})=>{
            setAlbum(data)
            console.log(data)
        })
    }, [])



    return (<div className={'box'}>
            {album.map((user, index) => (<Album item={user} key={index}/>))}
        </div>


    );
}