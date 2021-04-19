import React from 'react';
import { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import CartProduct from '../CartProduct';
import { Hr } from '../../../GlobalStyle.style';
import {
  CardButton,
  CartWrapper,
  Flex,
  Header,
  ItemCount,
  ItemWrapper,
  EmptyCart,
} from './Cart.style';

export default function Cart({ items }) {
  const [totalValue, setTotalValue] = useState(0);

  if (items.length === 0)
    return (
      <CartWrapper>
        <EmptyCart>
          <span>
            <FaShoppingCart size={32} />
          </span>
          <h3>YOUR CART IS EMPTY</h3>
          <Hr marginTop="0.85" />
          <CardButton>Browse bestsellers</CardButton>
        </EmptyCart>
      </CartWrapper>
    );
  else
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
            <CardButton>Go to checkout</CardButton>
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
