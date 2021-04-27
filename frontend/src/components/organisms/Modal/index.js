import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import { clearProductDetails } from '../../../actions/productActions';
import { addToCart } from '../../../actions/cartActions';

import { Wrapper, ModalStyle, ModalContent, ModalBody } from './Modal.style';
import { Container } from '../../../styles/main.styles';

import PictureDisplay from '../../atoms/PictureDisplay';
import ProductData from '../../molecules/ProductData';
import Prefetch from '../../molecules/Prefetch';

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
  clearProductDetails,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
