import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function Loader({ absolute = false }) {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: '100px',
        height: '100px',
      }}>
      <span className="sr-only">Loading!</span>
    </Spinner>
  );
}
