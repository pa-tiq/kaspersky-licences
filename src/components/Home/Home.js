import React, { useContext, useEffect } from "react";
import { LicenceContext } from "../../store/licence-context";
import LicenceList from "../Licences/LicenceList";
import classes from "./Home.module.css";

const Home = () => {
  const licenceContext = useContext(LicenceContext);

  useEffect(()=>{
    async function getLicences(){
      await licenceContext.fetchLicences();
    }
    getLicences();
  },[]);

  return (
    <section className={classes.homepage}>
      <div className={classes.home}>
        <LicenceList licences={licenceContext.licences}/>
      </div>
    </section>
  );
};

export default Home;
