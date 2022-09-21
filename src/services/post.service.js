import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";

const userService = {
    getAll:()=>axiosService.get(urls.user),
    create:(post)=>axiosService.post(urls.put, post)
    // getById:(id)=>axiosService.get(`${urls.cars}/${id}`),
    // updateById:(id, car)=>axiosService.put(`${urls.cars}/${id}`, car),
    // deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`),
}

export {
    userService
}