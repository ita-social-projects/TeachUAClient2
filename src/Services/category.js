import fetchRequest, { REACT_APP_API_URL } from "./serviceUtills";

const url = `${REACT_APP_API_URL}/categories`;
const putUrl = `${REACT_APP_API_URL}/category/`;

const getCategoriesService = () => {
  return fetchRequest.get(url);
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
    tagTextColor: newData.tagTextColor
  });
};

export { getCategoriesService, editCategoriesService };
