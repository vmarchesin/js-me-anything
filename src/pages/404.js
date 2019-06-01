import React from 'react';

import Layout from '@layouts';
import SEO from '@components/SEO';
import Anchor from '@components/Anchor';

export default function () {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>HTTP Status Code: 404</h1>
      <p>
        {"That means this page doesn't exist. You can learn more about that "}
        <Anchor
          href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404"
          newTab
        >
          here.
        </Anchor>
      </p>
    </Layout>
  );
}
