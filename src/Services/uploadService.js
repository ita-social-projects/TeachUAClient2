import fetchRequest from "./serviceUtills";
import { UPLOAD_IMAGE_URL } from "./Config/ApiConfig";
import { DELETE_FILE_URL } from "./Config/ApiConfig";

export const uploadImage = (image, folder) => {
    let data = new FormData();
    data.append("image", image);
    data.append("folder", folder);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", UPLOAD_IMAGE_URL, false);
    xhr.send(data);
    
    return xhr.response;
}

export const deleteFile = async (filePath) => {
    return await fetchRequest.delete(DELETE_FILE_URL + "?filePath=" + filePath)
        .then((response) => {
            return response.data
        }).catch((error) => {
            return error.response.data
        });
};

export const tokenToHeader = () => {
    const token = localStorage.getItem("accessToken");
    return "Bearer " + token;
}