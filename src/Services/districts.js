import fetchRequest from "./serviceUtills";
import axios from "axios";
import { REACT_APP_API_URL } from "./serviceUtills";

const urlDistrict = `${REACT_APP_API_URL}/districts`;
const urlCity = `${REACT_APP_API_URL}/city`;
//const urlAddCity=`${REACT_APP_API_URL}/city`
const getDistrictsServise = () => {
  return axios.get(urlDistrict);
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

const updateDistrict = (data) => {
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

export { getDistrictsServise, getCity, addCity, updateDistrict, deleteCity };
 