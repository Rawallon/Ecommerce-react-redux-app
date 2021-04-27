import React from 'react';
import { Spinner } from '../../styles/bootstrap.style';

export default function Loader() {
  return (
    <Spinner role="status">
      <span className="sr-only">Loading!</span>
    </Spinner>
  );
}
