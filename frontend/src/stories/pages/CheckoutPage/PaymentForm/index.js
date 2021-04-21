import React, { useState } from 'react';
import { ButtonPrimary, Col, Row } from '../../../../styles/bootstrap.style';
import { HeaderText } from '../../../../styles/main.styles';
import FormRadio from '../../../components/FormRadio';
import {
  FormCheck,
  FormLabel,
  FormInput,
  FormInputLabel,
} from './PaymentForm.style';

export default function PaymentForm({ submitHandler }) {
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  function submitFormHandler(e) {
    e.preventDefault();
    submitHandler(paymentMethod);
  }
  return (
    <Row justifyCenter>
      <Col md flexDirection={'column'}>
        <HeaderText alignCenter>Payment Method</HeaderText>
        <form onSubmit={submitFormHandler} style={{ width: '100%' }}>
          <FormLabel as="legend">Select Method</FormLabel>
          <Col
            flexDirection={'column'}
            alignItems={'flex-start'}
            style={{ marginBottom: '1rem' }}>
            <FormRadio
              labelText="PayPal or CC"
              radioValue="PayPal"
              name="paymentMethod"
              checked={paymentMethod === 'PayPal'}
              onChange={setPaymentMethod}
            />
            <FormRadio
              labelText="Mercado Pago"
              radioValue="MercadoPago"
              name="paymentMethod"
              checked={paymentMethod === 'MercadoPago'}
              onChange={setPaymentMethod}
            />
          </Col>
          <ButtonPrimary type="submit">Continue</ButtonPrimary>
        </form>
      </Col>
    </Row>
  );
}
