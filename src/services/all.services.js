import {axiosService} from "./axios.service";

import {urls} from "../urls"

const userService = {

    getComments:()=> axiosService.get(urls.comments),
    getPosts:()=> axiosService.get(urls.posts)
}

export {
    userService
}