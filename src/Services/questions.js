import axios from "axios"
import {REACT_APP_API_URL} from "./serviceUtills"


const url = `${REACT_APP_API_URL}/questions` 

const getQuestions = () => {
    return axios.get(url);
};

export {
    getQuestions
};