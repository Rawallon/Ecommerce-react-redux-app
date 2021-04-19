import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducer,
  productDetailsReducer,
  productReviewCreateReducer,
  productTopRatedReducer,
  productFeaturedReducer,
} from './reducers/productsReducer';
import { cartListReducer, cartReducer } from './reducers/cartReducer';
import {
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from './reducers/userReducer';
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListReducer,
  orderPayReducer,
} from './reducers/orderReducer';
import {
  categoriesNamesReducer,
  featuredCategoryReducer,
} from './reducers/shopReducer';

const reducer = combineReducers({
  categoriesNames: categoriesNamesReducer,
  featuredCategory: featuredCategoryReducer,
  productFeatured: productFeaturedReducer,
  productTopRated: productTopRatedReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productReviewCreate: productReviewCreateReducer,
  cart: cartReducer,
  cartList: cartListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPayment: orderPayReducer,
  orderList: orderListReducer,
  userList: userListReducer,
});

const storageCartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const shippingAdressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : [];

const storageUserInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  cart: {
    cartItems: storageCartItems,
    shippingAddress: shippingAdressFromStorage,
  },
  userLogin: { userInfo: storageUserInfo },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
