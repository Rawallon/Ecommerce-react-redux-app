import React, { useState } from 'react';

import { ButtonPrimary, Col, Row } from '../../../styles/bootstrap.style';
import { HeaderText } from '../../../styles/main.styles';

import FormInput from '../../atoms/FormInput';

export default function ShippingForm({ submitHandler, shippingAddress }) {
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const submitFormHandler = (e) => {
    e.preventDefault();
    submitHandler(address, city, postalCode, country);
  };

  return (
    <Row justifyCenter>
      <Col md>
        <form style={{ width: '100%' }} onSubmit={submitFormHandler}>
          <HeaderText textAlign={'center'}>Shipping</HeaderText>
          <FormInput
            name="address"
            value={address}
            onChange={setAddress}
            required
          />
          <FormInput name="city" value={city} onChange={setCity} required />
          <FormInput
            name="postalCode"
            value={postalCode}
            onChange={setPostalCode}
            required
          />
          <FormInput
            name="country"
            value={country}
            onChange={setCountry}
            required
          />
          <ButtonPrimary type="submit">Continue</ButtonPrimary>
        </form>
      </Col>
    </Row>
  );
}
