import React from 'react';
import Layout from '../components/Layout';
import IFrame from '../components/IFrame';
import data from '../data.json';

const BaxterPage = () => (
  <Layout>
    <IFrame data={data.baxter}></IFrame>
  </Layout>
);

export default BaxterPage;
