import fetchRequest, { REACT_APP_API_URL } from "./serviceUtills";



const getUrlSearchParams = (city, districtName, stationName, isOnline, categoriesName, age) =>{
  
    
    let getUrl = `${REACT_APP_API_URL}/clubs/search/advanced?name=`;
    if (city != null){
        getUrl += `&cityName=${city}`
    }
         if (districtName != null) {
            getUrl += `&districtName=${districtName}`
            
        }
         if (stationName != null) {
            getUrl += `&stationName=${stationName}`
        } 
      
         if (categoriesName != null) {
            getUrl += `&categoriesName[]=${categoriesName}`
        } 
         if (age != null) {
            getUrl += `&age=${age}`
        } 
           if (isOnline == true) {
            getUrl += `&isOnline=true`
        } 
    return fetchRequest.get(`${getUrl}&sort=id,asc&page=0`);
}

//&isOnline=${isOnline}&categoriesName=${categoriesName}&age=${age}&sort[sorted]=true&sort[unsorted]=true&sort[empty]=true&offset=0&pageNumber=0&pageSize=0&paged=true&unpaged=true

export default (getUrlSearchParams)