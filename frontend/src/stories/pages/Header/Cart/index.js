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
  useEffect(() => {
    let total = 0;
    for (const item in items) {
      if (!items[item].loading) {
        total += +items[item].price * 1;
      }
    }
    setTotalValue(total);
  }, [items]);
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
              {items.length} Ite{items.length > 1 ? 'ms' : 'm'} added
            </h3>
          </ItemCount>
          <Flex>
            <span>
              ${totalValue.toString().split('.')[0]}.
              <small>{totalValue.toString().split('.')[1] || '00'}</small>
            </span>
          </Flex>
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
