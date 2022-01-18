import fetchRequest from "./serviceUtills";
import axios from "axios";
import { REACT_APP_API_URL } from "./serviceUtills";

const urlCities = `${REACT_APP_API_URL}/cities`;
const urlCity = `${REACT_APP_API_URL}/city`;
//const urlAddCity=`${REACT_APP_API_URL}/city`
const getSitiesServise = () => {
  return axios.get(urlCities);
};

const getCitiesName = () => { 
  return fetchRequest.get(urlCities); 
};

const getCity = (id) => {
  return axios.get(`${urlCity}/${id}`);
};

const addCity = (data) => {
  return fetchRequest
    .post(urlCity, {
      name: data.name,
      latitude: data.latitude,
      longitude: data.longitude,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.response);
      return error.response.data;
    });
};

const updateCities = (data) => {
  return fetchRequest
    .put(`${urlCity}/${data.id}`, {
      id: data.id,
      name: data.name,
      latitude: data.latitude,
      longitude: data.longitude,
    })
    .catch((error) => {
      console.log(error.response);
      return error.response.data;
    });
};
const deleteCity = (data) => {
  return fetchRequest
    .delete(`${urlCity}/${data.id}`, {
      id: data.id,
      name: data.name,
      latitude: data.latitude,
      longitude: data.longitude,
    })
    .catch((error) => {
      return error.response.data;
    });
};

export { getSitiesServise, getCity, addCity, updateCities, deleteCity, getCitiesName };
