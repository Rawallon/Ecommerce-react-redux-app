import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  listCategoriesNames,
  listFeaturedCategories,
} from '../actions/shopActions';
import { logout } from '../actions/userAction';
import StoreHeader from '../stories/pages/Header/Header';
import Footer from './Footer';

export const Layout = ({
  logout,
  categoriesNames,
  listCategoriesNames,
  listFeaturedCategories,
  itemsOnCart,
  featuredItemPerCategory,
  userInfo,
  children,
}) => {
  useEffect(() => {
    listCategoriesNames();
  }, [listCategoriesNames]);

  const fetchFeaturedItems = (categoryName) => {
    listFeaturedCategories(categoryName);
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
      {children}
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  categoriesNames: state.categoriesNames,
  featuredItemPerCategory: state.featuredCategory,
  userInfo: state.userLogin.userInfo,
  itemsOnCart: state.cart.cartItems,
});

const mapDispatchToProps = {
  listCategoriesNames,
  listFeaturedCategories,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
