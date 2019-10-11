import React from 'react';
import Layout from '../components/Layout';
import IFrame from '../components/IFrame';
import data from '../data.json';

const JessicaPage = () => (
  <Layout>
    <IFrame data={data.jessica}></IFrame>
  </Layout>
);

export default JessicaPage;
