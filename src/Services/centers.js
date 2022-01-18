import fetchRequest from "./serviceUtills";
import { REACT_APP_API_URL } from "./serviceUtills";

const getUrl=`${REACT_APP_API_URL}/centers`
const getCenterservices=()=>{
    return fetchRequest.get(getUrl);
}
export{
    getCenterservices
};