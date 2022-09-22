import {axiosService} from "./axios.service";

import {urls} from "../urls/urls"

const userService = {
    getAll:()=>axiosService.get(urls.user),
    getAllP:(id)=>axiosService.get(urls.comennt+id+'/comments'),


}

export {
    userService
}