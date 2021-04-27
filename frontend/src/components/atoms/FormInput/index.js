import React, { useEffect, useState } from 'react';

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
  autocomplete = 'no',
}) {
  const [invalid, setInvalid] = useState(isInvalid);

  // In case it recieves invalid as prop
  // A TODO would be to add messages
  useEffect(() => {
    setInvalid(isInvalid);
  }, [isInvalid]);

  // To make validation "feel" faster we do it onBlur
  function handleOnBlur() {
    if (value.toString().length === 0) {
      setInvalid(true);
    }
    if (type !== 'email') return;
    const isEmail = value.match(/.+@.+\..+/gi);
    if (!isEmail || value.toString().length === 0) {
      setInvalid(true);
    }
  }

  // This way we can garantee it always has a label/placeholder
  let lbl = label || placeholder || name;
  let phd = placeholder || lbl;

  return (
    <InputWrapper controlId={name}>
      <InputLabel>{capitalize(lbl)}:</InputLabel>
      <InputText
        isInvalid={invalid}
        type={type}
        disabled={disabled}
        placeholder={capitalize(phd)}
        value={value}
        onBlur={handleOnBlur}
        required={required}
        onChange={(e) => {
          return onChange(e.target.value);
        }}
        as={asField ? asField : 'input'}
        autoComplete={autocomplete}
      />
    </InputWrapper>
  );
}
