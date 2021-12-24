import axios from "axios"


const url = `https://speak-ukrainian.org.ua/dev/api/centers` 

const getClubsService = () => {
    return axios.get(url);
};

export {
    getClubsService
};