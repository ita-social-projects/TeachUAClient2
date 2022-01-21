import fetchRequest, { REACT_APP_API_URL } from "./serviceUtills";

const urlClubs = `${REACT_APP_API_URL}/clubs`;

const getClubs = () => {
    return fetchRequest.get(urlClubs);
};

export { getClubs };
