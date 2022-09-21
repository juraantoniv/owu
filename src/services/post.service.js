import {axiosService} from "./axios.service";

import {urls} from "../urls/urls"

const userService = {
    getAll:()=>axiosService.get(urls.comennt),
    create:(post)=>axiosService.post(urls.comennt, post)

}

export {
    userService
}