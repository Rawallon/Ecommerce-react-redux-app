import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Col, ListGroup } from 'react-bootstrap';

export const CartSubtotal = ({ checkoutHandler, qty, products }) => {
  const [totalValue, setTotalValue] = useState(0);
  const [shippingValue, setShippingValue] = useState(0);
  const [itemQty, setItemQty] = useState(0);
  useEffect(() => {
    let total = 0;
    for (const item in products) {
      if (!products[item].loading) {
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
      <ListGroup.Item active>
        <Col>
          <h4>Resumo do pedido</h4>
        </Col>
        <Col className="d-flex align-items-center justify-content-between">
          <div>
            {itemQty} ite
            {itemQty > 1 ? `ms` : `m`}
          </div>
          <div>${totalValue.toFixed(2)}</div>
        </Col>
        <Col className="d-flex align-items-center justify-content-between my-2">
          <div>Shipping</div>
          <div>{shippingValue}</div>
        </Col>
        <Col className="mt-4">
          <Button
            variant="outline-success"
            disabled={itemQty === 0}
            onClick={checkoutHandler}
            block>
            Continue to checkout!
          </Button>
        </Col>
      </ListGroup.Item>
    </>
  );
};

const mapStateToProps = (state) => ({
  qty: state.cart.cartItems,
  products: state.cartList.products,
});

export default connect(mapStateToProps, null)(CartSubtotal);
