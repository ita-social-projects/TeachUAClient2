import fetchRequest, { REACT_APP_API_URL } from "./serviceUtills";

const urlGet = `${REACT_APP_API_URL}/questions`;
const url = `${REACT_APP_API_URL}/question`;

const getQuestions = () => {
  return fetchRequest.get(urlGet);
};

const updateQuestions = (data) => {
  return fetchRequest
    .put(`${url}/${data.id}`, {
      id: data.id,
      title: data.title,
      text: data.text,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
      return error.response.data;
    });
};

const deleteQuestions = (data) => {
  return fetchRequest
    .delete(`${url}/${data.id}`, {
      id: data.id,
      title: data.title,
      text: data.text,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
      return error.response.data;
    });
};

const createQuestions = (data) => {
  return fetchRequest
    .post(url, {
      title: data.title,
      text: data.text,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.response);
      return error.response.data;
    });
};

export { getQuestions, createQuestions, updateQuestions, deleteQuestions };
