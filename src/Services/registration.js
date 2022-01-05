import fetchRequest from "./serviceUtills";
import { REACT_APP_API_URL } from "./serviceUtills";

const urlRegistrarion = `${REACT_APP_API_URL}/signup`;

const addUser = (
  // id,
  email,
  firstName,
  lastName,
  phone,
  password,
  roleName
  //verificationCode,
  //urlLogo,
  //status
) => {
  return fetchRequest
    .post(urlRegistrarion, {
      //  id,
      email,
      firstName,
      lastName,
      phone,
      password,
      roleName,
      //verificationCode,
      //urlLogo,
      //status,
    })
   
};
export { addUser };
