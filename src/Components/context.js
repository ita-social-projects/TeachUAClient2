import React from "react";

const ShowAdvancedSearchContext = React.createContext({
  isSearchFilterEnabled: false,
  toggleSearchFilter: () => {},
});

export default ShowAdvancedSearchContext;
