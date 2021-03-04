import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Col, ListGroup } from 'react-bootstrap';

export const CartSubtotal = ({ qty, products }) => {
  const [totalValue, setTotalValue] = useState(0);
  const [itemQty, setItemQty] = useState(0);
  useEffect(() => {
    let total = 0;

    for (const item in products) {
      if (!products[item].price || !qty[item]) continue;
      total += +products[item].price * +qty[item];
    }
    if (Object.keys(products).length > 0)
      setItemQty(
        Object.values(qty).reduce(
          (accumulator, currentValue) => +accumulator + +currentValue,
        ),
      );
    setTotalValue(total);
  }, [products, qty]);

  if (Object.keys(products).length === 0) return null;
  return (
    <>
      <ListGroup.Item active>
        <Col>
          <h4>Resumo do pedido</h4>
        </Col>
        <Col className="d-flex align-items-center justify-content-between">
          <div>
            {itemQty} ite
            {itemQty > 1 ? `ns` : `m`}
          </div>
          <div>${totalValue.toFixed(2)}</div>
        </Col>
        <Col className="d-flex align-items-center justify-content-between my-2">
          <div>Shipping</div>
          <div>-</div>
        </Col>
        <Col className="mt-4">
          <Button variant="outline-success" block>
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
