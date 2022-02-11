import React from "react";

const ShowAdvancedSearchContext = React.createContext({
  isSearchFilterEnabled: false,
  toggleSearchFilter: () => {},
  searchValue: " ",
  showSearch: '',
  getSearchParams: () => {},
  gerrr:'',
  city: "",
  age: "",
  districtName: "",
  stationName: "",
  categoriesName: [],
  isOnline: false,
  centerClub: "",

});


export default ShowAdvancedSearchContext;
