import React from 'react';
import { InputLabel, InputText, InputWrapper } from './FormInput.style';

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};
export default function FormInput({
  name,
  type = 'text',
  value = '',
  label,
  onChange,
  isInvalid,
  required = false,
  disabled = false,
  placeholder,
  asField,
}) {
  // To make sure it always has a label/placeholder, even if I don't explicitly set it
  let lbl = label || placeholder || name;
  let phd = placeholder || lbl;
  return (
    <InputWrapper controlId={name}>
      <InputLabel>{capitalize(lbl)}:</InputLabel>
      <InputText
        isInvalid={isInvalid}
        type={type}
        disabled={disabled}
        placeholder={capitalize(phd)}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        as={asField ? asField : 'input'}
      />
    </InputWrapper>
  );
}
