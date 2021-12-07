import axios from "axios"
import {REACT_APP_API_URL} from "./constants"


const url = `${REACT_APP_API_URL}/categories` 

const getCategoriesService = () => {
    return axios.get(url);
};

export {
    getCategoriesService
};