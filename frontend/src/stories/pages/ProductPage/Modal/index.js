import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';

import {
  clearProductDetails,
  listProductDetails,
} from '../../../../actions/productActions';
import { addToCart } from '../../../../actions/cartActions';
import { Wrapper } from './Modal.style';
import { Container } from '../../../GlobalStyle.style';
import PictureDisplay from '../PictureDisplay/';
import ProductData from '../ProductData/';
import Prefetch from '../../../../components/Prefetch';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const ModalStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const ModalContent = styled.div`
  border: 3px solid #f3f5f9;
  width: 70%;
  background: #fff;
  padding: 2rem;
  border-radius: 0.4rem;
`;
const ModalBody = styled.div`
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  /* left: -300%; */
  transition: all 0.3s ease-in-out;
  z-index: 2;
`;

export function Modal({ productDetails, clearProductDetails, addToCart }) {
  const { error, loading, product, isModalOn } = productDetails || {
    error: false,
    loading: false,
    product: {},
    isModalOn: false,
  };

  let history = useHistory();
  function addToCartHandler(pId, qty = 1) {
    if (product && qty <= product.countInStock) {
      clearProductDetails();
      addToCart(pId, qty);
      history.push('/cart');
    } else {
      history.push('/404');
    }
  }

  if (!isModalOn) return null;
  if (error || loading) return <Prefetch loading={loading} error={error} />;
  return ReactDom.createPortal(
    <div>
      <ModalStyle>
        <Container>
          <ModalBody onClick={clearProductDetails}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <Wrapper>
                <PictureDisplay images={Array(3).fill(product.image)} />
                <ProductData {...product} addToCart={addToCartHandler} />
              </Wrapper>
            </ModalContent>
          </ModalBody>
        </Container>
      </ModalStyle>
    </div>,
    document.getElementById('modal-root'),
  );
}

const mapStateToProps = (state) => ({
  productDetails: state.productDetails,
});

const mapDispatchToProps = {
  listProductDetails,
  clearProductDetails,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
