import fetchRequest from "./serviceUtills";
import { REACT_APP_API_URL } from "./serviceUtills";

const urlCities = `${REACT_APP_API_URL}/cities`;
const urlCity = `${REACT_APP_API_URL}/city`;
//const urlAddCity=`${REACT_APP_API_URL}/city`
const getSitiesServise = () => {
  return fetchRequest.get(urlCities);
};

const getCitiesName = () => {
  return fetchRequest.get(urlCities);
};

const getCity = (id) => {
  return fetchRequest.get(`${urlCity}/${id}`);
};

const addCity = (data) => {
  return fetchRequest
    .post(urlCity, {
      name: data.name,
      latitude: data.latitude,
      longitude: data.longitude,
    })
    
};

const updateCities = (data) => {
  return fetchRequest
    .put(`${urlCity}/${data.id}`, {
      id: data.id,
      name: data.name,
      latitude: data.latitude,
      longitude: data.longitude,
    })
    
};
const deleteCity = (data) => {
  return fetchRequest
    .delete(`${urlCity}/${data.id}`, {
      id: data.id,
      name: data.name,
      latitude: data.latitude,
      longitude: data.longitude,
    });
    
};

export { getSitiesServise, getCity, addCity, updateCities, deleteCity, getCitiesName };
