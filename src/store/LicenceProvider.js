import React, { useState, useEffect } from "react";
import useHttp from "../hooks/use-http";
import LicenceContext from "./licence-context";

const LicenceProvider = (props) => {
  const httpObj = useHttp();
  const [licences, setLicences] = useState([]);

  const fetchLicencesHandler = async () => {
    const requestConfig = {
      url: "https://react-http-ccf63-default-rtdb.firebaseio.com/orders.json",
    };
    const updateLicences = (newFiles) => {
      console.log(newFiles);
    };
    httpObj.sendRequest(requestConfig, updateLicences);
  };

  useEffect(() => {
    fetchLicencesHandler();
  }, []); //this only runs once - when the app starts

  return (
    <LicenceContext.Provider
      value={{
        licences: licences,
        isLoading: httpObj.isLoading,
        error:httpObj.error,
        fetchLicences: fetchLicencesHandler,
      }}
    >
      {props.children}
    </LicenceContext.Provider>
  );
};

export default LicenceProvider;
