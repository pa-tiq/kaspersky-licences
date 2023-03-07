import { createContext, useEffect, useState } from 'react';
import useHttp from '../hooks/use-http';
import { wait } from '../util/wait';

export const LicenceContext = createContext({
  licences183: [],
  licences184: [],
  isLoading: false,
  error: null,
  fetchLicences183: async () => {},
  fetchLicences184: async () => {},
});

const LicenceContextProvider = (props) => {
  const httpObj = useHttp();
  const [isLoading, setIsLoading] = useState(false);
  const [licences183, setLicences183] = useState([]);
  const [licences184, setLicences184] = useState([]);

  useEffect(() => {
    async function getLicences() {
      setIsLoading(true);
      fetchLicences183().then(() => {
        wait(500).then(() => {
          fetchLicences184();
          setIsLoading(false);

        });
      });
    }
    getLicences();
  }, []);

  const fetchLicences183 = async () => {
    const requestConfig = {
      url: 'http://10.78.108.190:8080/licences/183',
    };
    const updateLicences = (newFiles) => {
      setLicences183(newFiles);
    };
    httpObj.sendRequest(requestConfig, updateLicences);
  };

  const fetchLicences184 = async () => {
    const requestConfig = {
      url: 'http://10.78.108.190:8080/licences/184',
    };
    const updateLicences = (newFiles) => {
      setLicences184(newFiles);
    };
    httpObj.sendRequest(requestConfig, updateLicences);
  };

  return (
    <LicenceContext.Provider
      value={{
        licences183: licences183,
        licences184: licences184,
        isLoading: httpObj.isLoading || isLoading,
        error: httpObj.error,
        fetchLicences183: fetchLicences183,
        fetchLicences184: fetchLicences184,
      }}
    >
      {props.children}
    </LicenceContext.Provider>
  );
};

export default LicenceContextProvider;
