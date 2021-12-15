import fetchRequest, {REACT_APP_API_URL} from "./constants"


const url = `${REACT_APP_API_URL}/categories` 

const getCategoriesService = () => {
    return fetchRequest.get(url);
};

export {
    getCategoriesService
};