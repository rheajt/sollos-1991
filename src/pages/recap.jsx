import React from 'react';
import IFrame from '../components/IFrame';
import Layout from '../components/Layout';

function RecapPage() {
  return (
    <Layout>
      <IFrame
        src="https://keystoneacademy-my.sharepoint.com/personal/jordan_rhea_keystoneacademy_cn/_layouts/15/Doc.aspx?sourcedoc={69ef5a18-41c4-4d1f-a506-2490a1280d74}&amp;action=embedview&amp;wdStartOn=1"
        width="476px"
        height="288px"
        frameBorder="0"
        rel="noopener noreferrer"
      >
        This is an embedded{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://office.com">
          Microsoft Office
        </a>{' '}
        document, powered by{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://office.com/webapps"
        >
          Office
        </a>
        .
      </IFrame>
    </Layout>
  );
}

export default RecapPage;
