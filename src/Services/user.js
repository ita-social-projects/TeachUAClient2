import axios from "axios"
import {REACT_APP_API_URL} from "./serviceUtills"


const url = `${REACT_APP_API_URL}/users` 

const getUsersService = () => {
    return axios.get(url);
};

export {
    getUsersService
};