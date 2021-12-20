import fetchRequest, {REACT_APP_API_URL} from "./serviceUtills"


const url = `${REACT_APP_API_URL}/questions` 

const getQuestions = () => {
    return fetchRequest.get(url);
};

const createQuestions = (title, text) => {
    return fetchRequest.post(url, {title, text});
};

export {
    getQuestions,
    createQuestions,
};