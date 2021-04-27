import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { TextDiv, WrapperDiv, Button } from './CartSubtotal.style';

export const CartSubtotal2 = ({ checkoutHandler, qty, products }) => {
  const [totalValue, setTotalValue] = useState(0);
  const [shippingValue, setShippingValue] = useState(0);
  const [itemQty, setItemQty] = useState(0);
  useEffect(() => {
    let total = 0;
    for (const item in products) {
      if (!products[item].loading && qty[item] !== undefined) {
        total += +products[item].price * +qty[item];
      }
    }
    if (Object.keys(products).length > 0 && Object.keys(qty).length > 0) {
      setItemQty(
        Object.values(qty).reduce(
          (accumulator, currentValue) => +accumulator + +currentValue,
        ),
      );
    } else {
      setShippingValue(0);
      setItemQty(0);
    }
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
            {itemQty > 1 ? `ms` : `n`}
          </div>
          <div>${totalValue.toFixed(2)}</div>
        </TextDiv>
        <TextDiv>
          <div>Shipping</div>
          <div>{shippingValue}</div>
        </TextDiv>
        <div>
          <Button
            variant="outline-success"
            disabled={itemQty === 0}
            onClick={checkoutHandler}
            block>
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

export default connect(mapStateToProps, null)(CartSubtotal2);
