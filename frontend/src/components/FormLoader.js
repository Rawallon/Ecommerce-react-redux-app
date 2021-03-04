import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function FormLoader() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '40px',
        left: '-5px',
        background: 'rgba(0,0,0,0.1)',
        width: '100%',
        height: '95%',
      }}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
        <Spinner
          animation="border"
          role="status"
          style={{
            width: '100px',
            height: '100px',
          }}>
          <span className="sr-only">Loading!</span>
        </Spinner>
      </div>
    </div>
  );
}
