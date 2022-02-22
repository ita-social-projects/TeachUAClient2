import React from "react";

const ShowAdvancedSearchContext = React.createContext({
  isSearchFilterEnabled: false,
  toggleSearchFilter: () => {},
  searchValue: " ",
  filteredClubs:[],
  showFilteredClubs: () => {},

});


export default ShowAdvancedSearchContext;
