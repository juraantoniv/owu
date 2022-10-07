import {axiosService} from "./axios.service";
import {urls} from "../configs";

const postService = {
    getAll: () => axiosService.get(urls.posts),
    getByID: (id) => axiosService.get(`${urls.posts}/${id}`)
}

export {
    postService
}