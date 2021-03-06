import React from 'react';
import { Form } from 'react-bootstrap';

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default function FormGroup({
  name,
  type = 'text',
  value = '',
  label,
  onChange,
  isInvalid,
  required = false,
  disabled = false,
  placeholder,
}) {
  let lbl = label || placeholder || name;
  let phd = placeholder || lbl;
  return (
    <Form.Group controlId={name}>
      <Form.Label>{capitalize(lbl)}:</Form.Label>
      <Form.Control
        isInvalid={isInvalid}
        type={type}
        disabled={disabled}
        placeholder={capitalize(phd)}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />
    </Form.Group>
  );
}
