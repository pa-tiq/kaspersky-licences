import React, { useContext, useEffect, useState } from 'react';
import { LicenceContext } from '../../store/licence-context';
import Table from '../Table/Table';
import classes from './Home.module.css';
import { Center } from '../Center/Center';

const Home = () => {  
  const licenceContext = useContext(LicenceContext);
  const { licences184 } = licenceContext;
  const { licences183 } = licenceContext;
  const [ data184, setData184 ] = useState([]);
  const [ data183, setData183 ] = useState([]);

  useEffect(()=>{
    const licences = licences184;
    licences.map((item)=>{
      if(item['OM'] === '4CTA-2'){
        item['OM'] = '4CTA';
      }      
      qtd_disponibilizada.forEach((dis)=>{
        if(item['OM'] === dis.om){
          item['Ativas/Disponibilizadas'] = item['qtd_licencas']+'/'+dis.qtd;
          item['Progresso'] = (parseFloat(item['qtd_licencas']/dis.qtd) * 100).toFixed(0) + '%';
          delete(item['qtd_licencas']);
        }
      });
      
    });
    const licences_filtered = licences.filter((item)=> (
      item['OM'] !== 'WORKGROUP'
    ))
    setData184(licences_filtered);
  },[licences184]);

  useEffect(()=>{
    setData183(licences183);
  },[licences183])

  return (
    <section className={classes.homepage}>
      <div className={classes.home}>
        <Center V H>
          <Table data={data183} title={'OMs fora de Manaus'} align={'left'} />
          <Table data={data184} title={'OMs em Manaus'} align={'right'} />
        </Center>
      </div>
    </section>
  );
};

export default Home;

const qtd_disponibilizada = [
  { om:"4CTA", qtd:60 },
  { om:"12BSUP", qtd:152},
  { om:"12RM", qtd:285},
  { om:"HMAM", qtd:264},
  { om:"CECMA", qtd:133},
  { om:"CRO12"  , qtd:116},
  { om:"4CGEO"  , qtd:175},
  { om:"3CIAFESP", qtd:142},
  { om:"2GPTE"  , qtd:162},
  { om:"Cia C CMA" , qtd:31 },
  { om:"7BPE", qtd:38 },
  { om:"12GAAAESL" , qtd:60 },
  { om:"CMA"  , qtd:268},
  { om:"4BIM", qtd:73 },
  { om:"PQRMNT12", qtd:137},
  { om:"1BIS", qtd:185},
  { om:"4BAVEX", qtd:160},
  { om:"1BCOMGESL" , qtd:82 },
  { om:"CIGS", qtd:39 },
  { om:"CMM"  , qtd:400},
  { om:"12CGCFEX", qtd:62 },
]