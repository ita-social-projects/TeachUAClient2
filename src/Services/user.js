import fetchRequest, { REACT_APP_API_URL } from "./serviceUtills";


const getUrl = `${REACT_APP_API_URL}/users`; 
const putUrl = `${REACT_APP_API_URL}/user/`;

const getUsersService = () => {
    return fetchRequest.get(getUrl);
};

const editUsersService = (newData) => {
    return fetchRequest.put(putUrl + newData.id, {
        id: newData.id,  
        email: newData.email,
        firstName: newData.firstName,
        lastName: newData.lastName,
        phone: newData.phone,
        urlLogo: newData.urlLogo,
        status: newData.status,
        roleName: newData.roleName
    });
  };

  const deleteUsersService = (data) => {
    return fetchRequest
      .delete(putUrl + data.id, {
        id: data.id,  
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        urlLogo: data.urlLogo,
        status: data.status,
        roleName: data.roleName
      })
      .catch((error) => {
        return error.response.data;
      });
  };

export {
    getUsersService, editUsersService, deleteUsersService
};