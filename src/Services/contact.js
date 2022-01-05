import fetchRequest, { REACT_APP_API_URL } from "./serviceUtills";

const getUrl = `${REACT_APP_API_URL}/contact-types`;
const putUrl = `${REACT_APP_API_URL}/contact-type/`;
const postUrl = `${REACT_APP_API_URL}/contact-type`;

const getContactsService = () => {
  return fetchRequest.get(getUrl);
};

const editContactsService = (newData) => {
  return fetchRequest.put(putUrl + newData.id, {
    id: newData.id,
    name: newData.name,
    urlLogo: newData.urlLogo,
  });
};

const createContactsService = (newData) => {
  return fetchRequest.post(postUrl, {
    id: newData.id,
    name: newData.name,
    urlLogo: newData.urlLogo && newData.urlLogo.file.response,
  });
};

const deleteContactsService = (data) => {
  return fetchRequest
    .delete(putUrl + data.id, {
      id: data.id,
      name: data.name,
      urlLogo: data.urlLogo,
    })
    .catch((error) => {
      return error.response.data;
    });
};

export {
  getContactsService,
  editContactsService,
  createContactsService,
  deleteContactsService,
};
