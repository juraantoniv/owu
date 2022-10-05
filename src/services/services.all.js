
import {urls} from "../configs";
import {axiosService} from "./Axios.service";

const servicesAll = {
    users:()=>axiosService(urls.users),
    posts:()=>axiosService(urls.posts)
}

export {
    servicesAll
}