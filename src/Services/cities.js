import fetchRequest from "./serviceUtills";
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
  return fetchRequest
    .post(
      "https://speak-ukrainian.org.ua/dev/api/city",
      {
        name: data.name,
        latitude: data.latitude,
        longitude: data.longitude,
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

const updateCities = (data) =>{
  return fetchRequest
    .put(
      `https://speak-ukrainian.org.ua/dev/api/city/${data.id}`,
      {
        id:data.id,
        name: data.name,
        latitude: data.latitude,
        longitude: data.longitude,
      }
      
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response);
      return error.response.data;
    });
};
const deleteCity = (data) =>{
  return fetchRequest
    .delete(
      `https://speak-ukrainian.org.ua/dev/api/city/${data.id}`,
      {
        id:data.id,
        name: data.name,
        latitude: data.latitude,
        longitude: data.longitude,
      }
      
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response);
      return error.response.data;
    });
};

export { getSitiesServise, getCity, addCity,updateCities,deleteCity };
