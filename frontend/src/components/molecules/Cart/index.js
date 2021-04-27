import React from 'react';
import { Link } from 'react-router-dom';

import {
  CardButton,
  CartWrapper,
  Flex,
  Header,
  ItemCount,
  ItemWrapper,
} from './Cart.style';

import CartProduct from '../../atoms/CartProduct';

export default function Cart({ items }) {
  return (
    <CartWrapper>
      <Header>
        <ItemCount>
          <span>Your shopping cart</span>
          <h3>
            {Object.keys(items).length} Ite
            {Object.keys(items).length > 1 ? 'ms' : 'm'} added
          </h3>
        </ItemCount>
        <Flex>
          <Link to="/cart" style={{ width: '100%' }}>
            <CardButton>Go to checkout</CardButton>
          </Link>
        </Flex>
      </Header>
      <ItemWrapper>
        {Object.keys(items).map((item) => (
          <CartProduct key={item} pId={item} />
        ))}
      </ItemWrapper>
    </CartWrapper>
  );
}
