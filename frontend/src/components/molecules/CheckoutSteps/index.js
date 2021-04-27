import React from 'react';

import Breadcrumb from '../../atoms/Breadcrumb/Breadcrumb';

export default function CheckoutSteps(props) {
  const renderSteps = () => {
    if (!props) return [];

    const checkoutSteps = [
      { name: 'Cart', link: '/cart', active: true },
      { name: 'Shipping', link: '/shipping', active: true },
      { name: 'Payment', link: '/payment', active: true },
      { name: 'Place Order', link: '/placeorder', active: true },
    ];
    //TODO: Switch?
    if (props.step4) {
      checkoutSteps[0].active = false;
      checkoutSteps[1].active = false;
      checkoutSteps[2].active = false;
      checkoutSteps[3].active = false;
      return checkoutSteps;
    } else if (props.step3) {
      checkoutSteps[0].active = false;
      checkoutSteps[1].active = false;
      checkoutSteps[2].active = false;
      return checkoutSteps;
    } else if (props.step2) {
      checkoutSteps[0].active = false;
      checkoutSteps[1].active = false;
      return checkoutSteps;
    } else if (props.step1) {
      checkoutSteps[0].active = false;
      return checkoutSteps;
    }
  };
  return <Breadcrumb center links={renderSteps()} />;
}
