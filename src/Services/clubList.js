import fetchRequest from "./serviceUtills";
import { REACT_APP_API_URL } from "./serviceUtills";

const urlSearch = `${REACT_APP_API_URL}/clubs/search?clubName=&cityName=%D0%9A%D0%B8%D1%97%D0%B2&isOnline=false&categoryName=&page=`;

const getSitiesServise = (number) => {
  return fetchRequest.get(urlSearch + number);
};

export { getSitiesServise};
