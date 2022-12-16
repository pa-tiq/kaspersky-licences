import React from "react";

const LicenceContext = React.createContext({
  licences: [],
  isLoading: false,
  error: null,
  fetchLicences: () => {},
});

export default LicenceContext;
