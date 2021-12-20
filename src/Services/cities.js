import axios from "axios";
import { REACT_APP_API_URL } from "./serviceUtills";

const urlCities = `${REACT_APP_API_URL}/cities`;
const urlCity = `${REACT_APP_API_URL}/city`;
//const urlAddCity=`${REACT_APP_API_URL}/city`
const getSitiesServise = () => {
  return axios.get(urlCities);
};

const getCity = (id) => {
  return axios.get(`${urlCity}/${id}`);
};

const addCity = (data) => {
  return axios
    .post(
      "https://speak-ukrainian.org.ua/dev/api/city",
      {
        name: data.name,
        latitude: data.latitude,
        longitude: data.longitude,
      },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJqdGkiOiIxIiwiZXhwIjoxNjM5NjA1NjAwfQ.Oiit8wyHDV6X0nZoFh7qBZjS96ElW_2dq5a6OTkojo7DICrFxK9HQGcKDQ_1ljbddw9hi-sKuH27zvLqkfFAiw",
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.response);
      return error.response.data;
    });
};
export { getSitiesServise, getCity, addCity };
