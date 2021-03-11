import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';

export const CartSubtotal = ({ qty, products, placeOrderHandler }) => {
  const [totalValue, setTotalValue] = useState(0);
  const [taxValue, setTaxValue] = useState(0);
  const [shippingValue, setShippingValue] = useState(0);
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
    setTaxValue(Number((0.15 * total).toFixed(2)));
    setShippingValue(total > 100 ? 0 : 100);
  }, [products, qty]);

  function checkoutHandler() {
    if (itemQty > 0) placeOrderHandler();
  }

  if (Object.keys(products).length === 0) return null;
  return (
    <>
      <Card>
        <Card.Header>Order Summary</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>
                  Ite
                  {itemQty > 1 ? `ns` : `m`}
                </Col>
                <Col className="text-right">${totalValue.toFixed(2)}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Shipping</Col>
                <Col className="text-right">${shippingValue.toFixed(2)}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Tax</Col>
                <Col className="text-right">${taxValue.toFixed(2)}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              <Row>
                <Col className="font-weight-bold">Total</Col>
                <Col className="text-right font-weight-bold">
                  ${(totalValue + shippingValue + taxValue).toFixed(2)}
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
          <Col className="mt-4">
            <Button disabled={itemQty === 0} onClick={checkoutHandler} block>
              Continue to checkout!
            </Button>
          </Col>
        </Card.Body>
      </Card>
    </>
  );
};

const mapStateToProps = (state) => ({
  qty: state.cart.cartItems,
  products: state.cartList.products,
});

export default connect(mapStateToProps, null)(CartSubtotal);
