import {axiosService} from "./axios.service";
import {urls} from "../configs";

const carsService = {
    getAll: () => axiosService.get(urls.cars),
    create:(car)=>axiosService.post(urls.cars, car)
}

export {
    carsService
}