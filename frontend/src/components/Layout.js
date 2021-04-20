import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  listFeaturedCategoriesItems,
  listCategoriesNames,
} from '../actions/shopActions';
import { logout } from '../actions/userAction';
import StoreHeader from '../stories/pages/Header/Header';
import Footer from './Footer';
import { Container } from '../styles/main.styles';

export const Layout = ({
  logout,
  categoriesNames,
  listCategoriesNames,
  listFeaturedCategoriesItems,
  itemsOnCart,
  featuredItemPerCategory,
  userInfo,
  children,
}) => {
  useEffect(() => {
    listCategoriesNames();
  }, [listCategoriesNames]);

  const fetchFeaturedItems = (categoryName) => {
    listFeaturedCategoriesItems(categoryName);
  };
  return (
    <>
      <StoreHeader
        categoriesList={categoriesNames}
        itemsOnCart={itemsOnCart}
        userInfo={userInfo}
        logout={logout}
        featuredItemPerCategory={featuredItemPerCategory}
        fetchFeaturedItems={fetchFeaturedItems}
      />
      <Container>{children}</Container>
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
  listFeaturedCategoriesItems,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
