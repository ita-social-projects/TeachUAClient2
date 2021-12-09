import axios from "axios"
import {REACT_APP_API_URL} from "./constants"


const url = `${REACT_APP_API_URL}/contact-types` 

const getContactsService = () => {
    return axios.get(url);
};

export {
    getContactsService
};