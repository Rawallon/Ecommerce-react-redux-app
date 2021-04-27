import React from 'react';
import { Helmet } from 'react-helmet';

export default function Meta({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title} | Shopay</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
}

Meta.defaultProps = {
  title: 'Welcome',
  description: 'We sell the best stuff on the block',
  keywords: 'products, buy products, cheap products',
};
