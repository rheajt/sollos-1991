import React from 'react';
import Layout from '../components/Layout';
import IFrame from '../components/IFrame';
import data from '../data.json';

const MattPage = () => (
  <Layout>
    <IFrame data={data.matt}></IFrame>
  </Layout>
);

export default MattPage;
