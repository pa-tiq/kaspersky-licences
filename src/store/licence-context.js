import { createContext, useState } from 'react';
import useHttp from '../hooks/use-http';

export const LicenceContext = createContext({
  licences: [],
  isLoading: false,
  error: null,
  fetchLicences: async () => {},
});

const LicenceContextProvider = (props) => {
  const httpObj = useHttp();
  const [licences, setLicences] = useState([]);

  const fetchLicences = async () => {
    const requestConfig = {
      url: 'http://10.78.108.184:8080/licences',
    };
    const updateLicences = (newFiles) => {
      setLicences(newFiles.recordset);
    };
    httpObj.sendRequest(requestConfig, updateLicences);
  };

  return (
    <LicenceContext.Provider
      value={{
        licences: licences,
        isLoading: httpObj.isLoading,
        error: httpObj.error,
        fetchLicences: fetchLicences,
      }}
    >
      {props.children}
    </LicenceContext.Provider>
  );
};

export default LicenceContextProvider;
