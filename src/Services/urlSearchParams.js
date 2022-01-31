import fetchRequest, { REACT_APP_API_URL } from "./serviceUtills";


const getUrl =`${REACT_APP_API_URL}/clubs/search/advanced?`;

const getUrlSearchParams = () =>{
    return fetchRequest.get(getUrl(values));
}


export default (getUrlSearchParams);