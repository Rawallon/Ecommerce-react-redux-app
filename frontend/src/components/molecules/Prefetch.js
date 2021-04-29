import React from 'react';

import Message from '../atoms/Message/';
import PageLoader from './PageLoader';

// This component should run before any data loads or if return an error
export default function Prefetch({ error, loading }) {
  if (error) return <Message variant="danger">{error}</Message>;
  if (loading) return <PageLoader />;
  // This could also work returning *children* instead of null
  if (!error && !loading) return null;
}
