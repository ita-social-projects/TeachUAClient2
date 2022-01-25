import fetchRequest from "./serviceUtills";
import { REACT_APP_API_URL } from "./serviceUtills";

const urlLocation = `${REACT_APP_API_URL}/location`;

const postLocationServices = (
  urlLocation,
  {
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
  }
) => {
  return fetchRequest.post(
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
    phone
  );
};

export { postLocationServices };
