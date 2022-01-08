import fetchRequest, { REACT_APP_API_URL } from "./serviceUtills";


const url = `${REACT_APP_API_URL}/users`; 
const putUrl = `${REACT_APP_API_URL}/user/`;

const getUsersService = () => {
    return fetchRequest.get(url);
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

export {
    getUsersService, editUsersService
};
