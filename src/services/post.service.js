import {axiosService} from "./axios.service";

import {urls} from "../urls/urls"

const userService = {
    getAll:()=>axiosService.get(urls.user),
    getPosts:(id)=> axiosService.get(urls.posts+'/?userId='+id)


}

export {
    userService
}