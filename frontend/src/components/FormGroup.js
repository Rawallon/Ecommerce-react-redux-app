import React from 'react';
import { Form } from 'react-bootstrap';

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default function FormGroup({
  name = 'name',
  type = 'text',
  value = '',
  labeltxt,
  onChange,
  required = false,
}) {
  let lbl = labeltxt || name;
  return (
    <Form.Group controlId={name}>
      <Form.Label>{capitalize(lbl)}:</Form.Label>
      <Form.Control
        type={type}
        placeholder={capitalize(name)}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />
    </Form.Group>
  );
}
