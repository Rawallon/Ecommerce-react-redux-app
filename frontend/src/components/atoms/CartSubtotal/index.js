import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { TextDiv, WrapperDiv, Button } from './CartSubtotal.style';

export const CartSubtotal = ({ checkoutHandler, qty, products }) => {
  const [totalValue, setTotalValue] = useState(0);
  const [shippingValue, setShippingValue] = useState(0);
  const [itemQty, setItemQty] = useState(0);

  useEffect(() => {
    let total = 0;
    if (Object.keys(products).length > 0 && Object.keys(qty).length > 0) {
      // Loops through products and sum to the total var.
      for (const item in products) {
        if (!products[item].loading && qty[item] !== undefined) {
          total += Number(products[item].price) * Number(qty[item]);
        }
      }
      // Transform object in array then uses .reduce to sum the values
      setItemQty(
        Object.values(qty).reduce(
          (accumulator, currentValue) =>
            Number(accumulator) + Number(currentValue),
        ),
      );
    } else {
      setShippingValue(0);
      setItemQty(0);
    }
    // The reason there isn't a any shipping logic
    // is that I'd need item weight and size
    setShippingValue(total > 100 ? 0 : 100);
    setTotalValue(total);
  }, [products, qty]);

  return (
    <>
      <WrapperDiv>
        <div>
          <h4>Order Summary</h4>
        </div>
        <TextDiv>
          <div>
            {itemQty} ite
            {itemQty > 1 ? `ms` : `m`}
          </div>
          <div>${totalValue.toFixed(2)}</div>
        </TextDiv>
        <TextDiv>
          <div>Shipping</div>
          <div>{shippingValue}</div>
        </TextDiv>
        <div>
          <Button disabled={itemQty === 0} onClick={checkoutHandler}>
            Continue to checkout!
          </Button>
        </div>
      </WrapperDiv>
    </>
  );
};

const mapStateToProps = (state) => ({
  qty: state.cart.cartItems,
  products: state.cartList.products,
});

export default connect(mapStateToProps, null)(CartSubtotal);
