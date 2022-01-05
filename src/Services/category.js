import fetchRequest, { REACT_APP_API_URL } from "./serviceUtills";

const getUrl = `${REACT_APP_API_URL}/categories`;
const putUrl = `${REACT_APP_API_URL}/category/`;
const postUrl = `${REACT_APP_API_URL}/category`;

const getCategoriesService = () => {
  return fetchRequest.get(getUrl);
};

const editCategoriesService = (newData) => {
  return fetchRequest.put(putUrl + newData.id, {
    id: newData.id,
    sortby: newData.sortby,
    name: newData.name,
    description: newData.description,
    urlLogo: newData.urlLogo,
    backgroundColor: newData.backgroundColor,
    tagBackgroundColor: newData.tagBackgroundColor,
    tagTextColor: newData.tagTextColor,
  });
};

const createCategoriesService = (newData) => {
  return fetchRequest.post(postUrl, {
    id: newData.id,
    sortby: newData.sortby,
    name: newData.name,
    description: newData.description,
    urlLogo: newData.urlLogo && newData.urlLogo.file.response,
    backgroundColor: newData.backgroundColor,
    tagBackgroundColor: newData.tagBackgroundColor,
    tagTextColor: newData.tagTextColor,
  });
};

const deleteCategoriesService = (data) => {
  return fetchRequest
    .delete(putUrl + data.id, {
      id: data.id,
      sortby: data.sortby,
      name: data.name,
      description: data.description,
      urlLogo: data.urlLogo,
      backgroundColor: data.backgroundColor,
      tagBackgroundColor: data.tagBackgroundColor,
      tagTextColor: data.tagTextColor,
    })
    .catch((error) => {
      return error.response.data;
    });
};

export {
  getCategoriesService,
  editCategoriesService,
  createCategoriesService,
  deleteCategoriesService,
};
