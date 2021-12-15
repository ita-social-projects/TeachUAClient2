import fetchRequest, {REACT_APP_API_URL} from "./constants";


const url = `${REACT_APP_API_URL}/signin` 

const signin = (email, password) => {
    return fetchRequest.post(url, {
        "email": email,
        "password": password
      });
};

export {signin};