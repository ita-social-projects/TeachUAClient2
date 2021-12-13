import axios from "axios";
import { REACT_APP_API_URL } from "./constants";

const url =`${REACT_APP_API_URL}/clubs`

const getUsersesServise=()=>{
    return axios.get(url);
}

export{
    getUsersesServise
}