import fetchRequest, { REACT_APP_API_URL } from "./serviceUtills";

const getUrl = `${REACT_APP_API_URL}/clubs/search/advanced?`;

const getUrlSearchParams = (city, age, isOnline,  districtName, stationName, categoriesName, centerClub) =>{
    return fetchRequest.get(`${getUrl}centerClub=${centerClub}cityName=${city}districtName=${districtName}stationName=${stationName}isOnline=${isOnline}categoriesName=${categoriesName}age=${age}sort[sorted]=true&sort[unsorted]=true&sort[empty]=true&offset=0&pageNumber=0&pageSize=0&paged=true&unpaged=true`);
}


export default (getUrlSearchParams)