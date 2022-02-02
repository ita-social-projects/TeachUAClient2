import fetchRequest from "./serviceUtills";
import { REACT_APP_API_URL } from "./serviceUtills";

const urlLocation = `${REACT_APP_API_URL}/location`;
const urlCategoties = `${REACT_APP_API_URL}/categories`;

const postLocationServices = ({
  name,
  address,
  cityId,
  districtId,
  stationId,
  cityName,
  districtName,
  stationName,
  coordinates,
  longitude,
  latitude,
  phone,
}) => {
  return fetchRequest.post(urlLocation, {
    name,
    address,
    cityId,
    districtId,
    stationId,
    cityName,
    districtName,
    stationName,
    coordinates,
    longitude,
    latitude,
    phone,
  });
};

const getCategories = () => {
  return fetchRequest.get(urlCategoties);
};

export { postLocationServices, getCategories };
