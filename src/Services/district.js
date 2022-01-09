import fetchRequest, { REACT_APP_API_URL } from "./serviceUtills";

const urlDistricts = `${REACT_APP_API_URL}/districts`;

const getDistricsName = () => {
    return fetchRequest.get(urlDistricts);
};

export { getDistricsName };
