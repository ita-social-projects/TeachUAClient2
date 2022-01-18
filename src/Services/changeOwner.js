import fetchRequest from "./serviceUtills";
import { REACT_APP_API_URL } from "./serviceUtills";

const url =`${REACT_APP_API_URL}/clubs`

const getUsersesServise=()=>{
    return fetchRequest.get(url);
}

export{
    getUsersesServise
}