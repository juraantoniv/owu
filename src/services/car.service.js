
import {urls} from "../configs";
import {axiosService} from "./Axios.service";

const carService = {
    // getAll: (page=1) => axiosService.get(urls.cars, {params:{page}}),
    create: (car) => axiosService.post(urls.cars, car),
    // addPhotoById: (id, data) => axiosService.patch(`${urls.cars}/${id}`, data)
}

export {
    carService
}