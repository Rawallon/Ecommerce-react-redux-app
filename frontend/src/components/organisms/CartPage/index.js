import React from 'react';
import { Link } from 'react-router-dom';

import CartItem from '../../atoms/CartItem';
import CartSubtotal from '../../atoms/CartSubtotal';
import Message from '../../atoms/MessageComponent';

import { WrapperCart } from './CartPage.style';

export default function CartPage({ cartItemsArray, checkoutHandler }) {
  return (
    <WrapperCart>
      <div>
        {cartItemsArray.length === 0 ? (
          <Message>
            Your cart is empty, <Link to="/">go back</Link>
          </Message>
        ) : (
          cartItemsArray.map((item) => <CartItem key={item} pId={item} />)
        )}
      </div>
      <div>
        <CartSubtotal checkoutHandler={checkoutHandler} />
      </div>
    </WrapperCart>
  );
}
