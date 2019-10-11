import React from 'react';
import Layout from '../components/Layout';
import IFrame from '../components/IFrame';
import data from '../data.json';

const MorganPage = () => (
  <Layout>
    <IFrame data={data.morgan}></IFrame>
  </Layout>
);

export default MorganPage;
