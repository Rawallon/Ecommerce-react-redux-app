import React from 'react';
import { Alert } from 'react-bootstrap';

export default function Message({ variant = 'info', children }) {
  return (
    <Alert
      variant={variant}
      style={{
        margin: 'auto',
        display: 'block',
        width: '100%',
      }}>
      {children}
    </Alert>
  );
}
