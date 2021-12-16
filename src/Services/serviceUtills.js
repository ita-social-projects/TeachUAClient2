import axios from "axios";

const getAccessToken = () => localStorage.getItem("accessToken") || false;
const removeAccessToken = () => localStorage.removeItem("accessToken");
export const REACT_APP_API_URL="https://speak-ukrainian.org.ua/dev/api"
const fetchRequest = axios.create ({
    headers: {
        "Content-Type": "application/json"
    }
});
fetchRequest.interceptors.request.use(config => {
    const token = getAccessToken();
    if (token) config.headers["Authorization"] = "Bearer "+token;
    return config;  
}, error => Promise.reject (error));

fetchRequest.interceptors.response.use(response => {    
    return response;  
}, error => {
    if (error.response.status === 403) {
        removeAccessToken();
        window.location.reload();
    }
   return Promise.reject (error)
});

export default fetchRequest;
