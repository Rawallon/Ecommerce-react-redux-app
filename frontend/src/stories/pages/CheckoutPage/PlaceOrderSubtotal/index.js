import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  ButtonPrimary,
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
} from '../../../../styles/bootstrap.style';
import { HalfCol } from './PlaceOrderSubtotal.style';

export const PlaceOrderSubtotal = ({ qty, products, placeOrderHandler }) => {
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
        <CardHeader>Order Summary</CardHeader>
        <CardBody>
          <ListGroup>
            <ListGroupItem>
              <Row style={{ margin: 0 }}>
                <HalfCol>
                  Ite
                  {itemQty > 1 ? `ns` : `m`}
                </HalfCol>
                <HalfCol style={{ textAlign: 'right' }}>
                  ${totalValue.toFixed(2)}
                </HalfCol>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row style={{ margin: 0 }}>
                <HalfCol>Shipping</HalfCol>
                <HalfCol style={{ textAlign: 'right' }}>
                  ${shippingValue.toFixed(2)}
                </HalfCol>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row style={{ margin: 0 }}>
                <HalfCol>Tax</HalfCol>
                <HalfCol style={{ textAlign: 'right' }}>
                  ${taxValue.toFixed(2)}
                </HalfCol>
              </Row>
            </ListGroupItem>
            <ListGroupItem variant="dark">
              <Row style={{ margin: 0 }}>
                <HalfCol>Total</HalfCol>
                <HalfCol style={{ textAlign: 'right' }}>
                  ${(totalValue + shippingValue + taxValue).toFixed(2)}
                </HalfCol>
              </Row>
            </ListGroupItem>
          </ListGroup>
          <HalfCol style={{ marginTop: '1.5rem' }}>
            <ButtonPrimary
              disabled={itemQty === 0}
              onClick={checkoutHandler}
              block>
              Continue to checkout!
            </ButtonPrimary>
          </HalfCol>
        </CardBody>
      </Card>
    </>
  );
};

const mapStateToProps = (state) => ({
  qty: state.cart.cartItems,
  products: state.cartList.products,
});

export default connect(mapStateToProps, null)(PlaceOrderSubtotal);
