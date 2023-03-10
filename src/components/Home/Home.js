import React, { useContext, useEffect, useState } from 'react';
import { LicenceContext } from '../../store/licence-context';
import Table from '../Table/Table';
import classes from './Home.module.css';
import { Center } from '../Center/Center';
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';

const prepareData = (data, server) => {
  let newData = data;

  (server === '184' ? hosts_184 : hosts_183).forEach((host) => {
    let found = false;
    newData.map((item) => {
      if (item['OM'] === host.OM) {
        found = true;
        item['Ativas/Disponibilizadas'] =
          item['qtd_licencas'] + '/' + host.hosts;
        item['Progresso'] =
          (parseFloat(item['qtd_licencas'] / host.hosts) * 100).toFixed(0);
        delete item['qtd_licencas'];
        item['OM'] = host.sigla;
      }
    });
    if (!found){
      newData.push({'OM':host.sigla, 'Ativas/Disponibilizadas':'0/'+host.hosts, 'Progresso':'0'})
    }
  });
  return newData;
}

const Home = () => {
  const licenceContext = useContext(LicenceContext);
  const { licences184 } = licenceContext;
  const { licences183 } = licenceContext;
  const [data184, setData184] = useState([]);
  const [data183, setData183] = useState([]);

  useEffect(() => {
    const licences = prepareData(licences184, '184');
    const licences_filtered = licences.filter(
      (item) => item['OM'] !== 'WORKGROUP'
    );
    setData184(licences_filtered);
  }, [licences184]);

  useEffect(() => {
    const licences = prepareData(licences183, '183');
    setData183(licences);
  }, [licences183]);

  if (licenceContext.isLoading) {
    return (
      <div className={classes.centered}>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className={classes.homepage}>
      <div className={classes.home}>
        <Center H>
          <Table data={data184} mainTitle={'OMs em Manaus'} />
          <Table data={data183} mainTitle={'OMs fora de Manaus'}  />
        </Center>
      </div>
    </section>
  );
};

export default Home;

const hosts_184 = [
  { sigla: '12º B SUP', OM: '12BSUP', hosts: 152 },
  { sigla: '12ª CGCFEx', OM: '12CGCFEX', hosts: 62 },
  { sigla: '12º GAAAESL', OM: '12GAAAESL', hosts: 60 },
  { sigla: '12ª RM', OM: '12RM', hosts: 285 },
  { sigla: '1º B COM SL', OM: '1BCOMGESL', hosts: 82 },
  { sigla: '1º BIS', OM: '1BIS', hosts: 185 },
  { sigla: '3ª CIA F ESP', OM: '3CIAFESP', hosts: 65 },
  { sigla: '2º GPT E', OM: '2GPTE', hosts: 162 },
  { sigla: '4º B AV EX', OM: '4BAVEX', hosts: 160 },
  { sigla: '4º C GEO', OM: '4CGEO', hosts: 175 },
  { sigla: '4º CTA', OM: '4CTA-2', hosts: 48 },
  { sigla: '7º BPE', OM: '7BPE', hosts: 40 },
  { sigla: 'CECMA', OM: 'CECMA', hosts: 133 },
  { sigla: 'CIGS', OM: 'CIGS', hosts: 39 },
  { sigla: 'CMA', OM: 'CMA', hosts: 268 },
  { sigla: 'CMM', OM: 'CMM', hosts: 400 },
  { sigla: 'CRO/12', OM: 'CRO12', hosts: 116 },
  { sigla: 'HMAM', OM: 'HMAM', hosts: 264 },
  { sigla: 'PQ R MNT/12', OM: 'PQRMNT12', hosts: 137 },
];

const hosts_183 = [
  { sigla: '3º BIS', OM: '3BIS', hosts: 80 },
  { sigla: '6º BIS', OM: '6BIS', hosts: 68 },
  { sigla: '61º BIS', OM: '61BIS', hosts: 68 },
  { sigla: '54º BIS', OM: '54BIS', hosts: 80 },
  { sigla: '7º BEC', OM: '7BEC', hosts: 180 },
  { sigla: '4º BIS', OM: '4BIS', hosts: 80 },
  { sigla: 'HGUT', OM: 'HGUT', hosts: 80 },
  { sigla: '8º BIS', OM: '8BIS', hosts: 80 },

  { sigla: '34º PEL PE', OM: '34PELPE', hosts: 2 },
  { sigla: '17º BIS', OM: '17BIS', hosts: 50 },
  { sigla: '16ª BALOG', OM: '16BALOG', hosts: 47 },
  { sigla: 'PMGU/TEFÉ', OM: 'PMGUTEFE', hosts: 23 },
  { sigla: '16ª BDA IN FSL', OM: '16BDAINFSL', hosts: 100 },

  { sigla: '10º GAC SL', OM: '10GACSL', hosts: 100 },
  { sigla: 'FTLOGHUM(BOA VISTA)', OM: 'FTLOGHUM', hosts: 233 },
  { sigla: '12º ESQDCMEC', OM: '12ESQCMEC', hosts: 43 },
  { sigla: '7º BIS', OM: '7BIS', hosts: 80 },
  { sigla: '6º BEC', OM: '6BEC', hosts: 171 },
  { sigla: '1º BLOG SL', OM: '1BLOGSL', hosts: 96 },
  { sigla: '1ª BDA INF SL', OM: '1BDAINFSL', hosts: 180 },

  { sigla: '21ª CIAECNST', OM: '21CIAECNST', hosts: 81 },
  { sigla: '5º BIS', OM: '5BIS', hosts: 80 },
  { sigla: '2º BLOGSL', OM: '2BLOGSL', hosts: 30 },
  { sigla: 'CIA C 2ª BDA INF SL', OM: 'CIAC2BDAINFSL', hosts: 21 },
  { sigla: '22º PEL PE', OM: '22PELPE', hosts: 9 },
  { sigla: '2º PEL COM SL', OM: '2PELCOMSL', hosts: 21 },
  { sigla: 'HGUSGC', OM: 'HGUSGC', hosts: 80 },
  { sigla: '2ª BDA INF SL', OM: '2BDAINFSL', hosts: 179 },

  { sigla: '17º BLOGSL', OM: '17BLOGSL', hosts: 30 },
  { sigla: '17ª CIA INF SL', OM: '17CIAINFSL', hosts: 54 },
  { sigla: '17º PEL COM SL', OM: '17PELCOMSL', hosts: 50 },
  { sigla: '5º BEC', OM: '5BEC', hosts: 180 },
  { sigla: 'HGUPV', OM: 'HGUPV', hosts: 227 },
  { sigla: '17ª BDA INF SL', OM: '17BDAINFSL', hosts: 180 },
];
