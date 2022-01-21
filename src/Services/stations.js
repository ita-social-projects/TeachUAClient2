import fetchRequest, { REACT_APP_API_URL } from "./serviceUtills";

const urlStations = `${REACT_APP_API_URL}/stations`;

const getStationName = () => {
    return fetchRequest.get(urlStations);
};

export { getStationName };
