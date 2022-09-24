import {axiosService} from "./axios.service";

import {urls} from "../urls"

const userService = {
    getTodos:()=>axiosService.get(urls.todos),
    getAlbums:()=> axiosService.get(urls.albums),
    getComments:()=> axiosService.get(urls.comments),
    getPosts:(id)=> axiosService.get(urls.posts+'/'+id)
}

export {
    userService
}