import fetchRequest, { REACT_APP_API_URL } from "./serviceUtills";

const url = `${REACT_APP_API_URL}/contact-types`;
const putUrl = `${REACT_APP_API_URL}/contact-type/`;

const getContactsService = () => {
  return fetchRequest.get(url);
};

const editContactsService = (newData) => {
  return fetchRequest.put(putUrl + newData.id, {
    id: newData.id,
    name: newData.name,
    urlLogo: newData.urlLogo,
  });
};

export { getContactsService, editContactsService };
