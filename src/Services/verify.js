import fetchRequest from "./serviceUtills";
import { REACT_APP_API_URL } from "./serviceUtills";

const verifyUser =(verifyCode) => {
    return fetchRequest
    .get(REACT_APP_API_URL + "/verify?code=" + verifyCode)
   
};
export {verifyUser}