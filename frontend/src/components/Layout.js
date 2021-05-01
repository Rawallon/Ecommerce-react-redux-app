import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { listCategoriesNames } from '../actions/shopActions';
import { logout } from '../actions/userAction';

import { Container } from '../styles/main.styles';

import Footer from './organisms/Footer';
import StoreHeader from './organisms/Header';

export const Layout = ({
  logout,
  categoriesNames,
  listCategoriesNames,
  itemsOnCart,
  featuredItemPerCategory,
  userInfo,
  children,
}) => {
  useEffect(() => {
    listCategoriesNames();
  }, [listCategoriesNames]);

  return (
    <>
      <StoreHeader
        categoriesList={categoriesNames}
        itemsOnCart={itemsOnCart}
        userInfo={userInfo}
        logout={logout}
        featuredItemPerCategory={featuredItemPerCategory}
      />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  categoriesNames: state.categoriesNames,
  featuredItemPerCategory: state.featuredItemsPerCategory,
  userInfo: state.userLogin.userInfo,
  itemsOnCart: state.cart.cartItems,
});

const mapDispatchToProps = {
  listCategoriesNames,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
