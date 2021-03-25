import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Hr } from '../../../GlobalStyle.style';
import {
  CardButton,
  CartWrapper,
  Flex,
  Header,
  ItemAlign,
  ItemCount,
  ItemDisplay,
  ItemImage,
  ItemDetails,
  ItemWrapper,
  ItemName,
  EmptyCart,
} from './Cart.style';

export default function index({ items }) {
  const totalPrice = items.reduce((ac, cv) => ac + Number(cv.price), 0);
  const renderItems = () => {
    return items.map((item) => (
      <ItemDisplay>
        {' '}
        <ItemImage>
          <img src={item.image} alt="" />
        </ItemImage>
        <ItemDetails>
          <ItemName>{item.name}</ItemName>
          <a href="#">Remove</a>
        </ItemDetails>
        {/* <ItemAlign align="start">{item.qty}</ItemAlign> */}
        <ItemAlign>
          ${String(item.price * item.qty).split('.')[0]}.
          {String(item.price * item.qty).split('.')[1] || '00'}
        </ItemAlign>
      </ItemDisplay>
    ));
  };
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
              ${String(totalPrice).split('.')[0]}.
              <small>{String(totalPrice).split('.')[1] || '00'}</small>
            </span>
          </Flex>
          <Flex>
            <CardButton>Go to checkout</CardButton>
          </Flex>
        </Header>
        <ItemWrapper>{renderItems()}</ItemWrapper>
      </CartWrapper>
    );
}
