import axios from "axios";
import { REACT_APP_API_URL } from "./serviceUtills";

const url =`${REACT_APP_API_URL}/stations`

const getSitiesServise=()=>{
    return axios.get(url);
}

export{
    getSitiesServise
}