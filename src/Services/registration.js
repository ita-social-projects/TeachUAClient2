import fetchRequest from "./serviceUtills";
import { REACT_APP_API_URL } from "./serviceUtills";

const urlRegistrarion = `${REACT_APP_API_URL}/signup`;

const addUser = (
  email,
  firstName,
  lastName,
  phone,
  password,
  roleName
) => {
  return fetchRequest
    .post(urlRegistrarion, {
      email,
      firstName,
      lastName,
      phone,
      password,
      roleName,
  
    })
   
};
export { addUser };
