import React from "react";

const ShowAdvancedSearchContext = React.createContext({
  isSearchFilterEnabled: false,
  toggleSearchFilter: () => {},
  searchValue: " "
});


export default ShowAdvancedSearchContext;
