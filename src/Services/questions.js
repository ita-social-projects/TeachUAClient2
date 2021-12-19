import fetchRequest, {REACT_APP_API_URL} from "./serviceUtills"


const url = `${REACT_APP_API_URL}/questions` 

const getQuestions = () => {
    return fetchRequest.get(url);
};

export {
    getQuestions
};