import React, { useState } from 'react';
import { Container } from '../../../GlobalStyle.style';
import {
  Header,
  LogoImg,
  NavCol,
  NavHeader,
  SubHeader,
  NavMouseOver,
  CatLink,
  ContHead,
  SearchInput,
  SearchButton,
  NavDropDown,
  CatDropDown,
  CatSub,
  CatDetailsWrapper,
} from './Header.style';
import { FaUser, FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa';
import img from './title.svg';
import Cart from '../Cart';
import Account from '../Account';
import Categories from '../Categories';
import CategoryDetails from '../CategoryDetails';
import { Link, useHistory } from 'react-router-dom';

import { logout } from '../../../../actions/userAction';
import { connect } from 'react-redux';

//export default function StoreHeader({ itemsOnCart, auth, categories }) {
export function StoreHeader({ userInfo, itemsOnCart, logout }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoverShopping, setHoverShopping] = useState(false);
  const [hoverUser, setHoverUser] = useState(false);
  const [hoverCategories, setHoverCategories] = useState(false);
  const categories = [
    { name: 'Components', link: '#' },
    { name: 'Computer Systems', link: '#' },
    { name: 'Electronics', link: '#' },
    { name: 'Gaming', link: '#' },
    { name: 'Networking', link: '#' },
    { name: 'Office Solutions', link: '#' },
    { name: 'Software & Services', link: '#' },
    { name: 'Home & Tools', link: '#' },
    { name: 'Health & Sports', link: '#' },
    { name: 'Apparel & Accessories', link: '#' },
  ];
  const subheaderCategories = [
    { name: 'New Releases', link: '/new-releases' },
    { name: 'Electronics', link: '/category/Electronics' },
  ];

  const toggleMenu = (mName) => {
    if (mName === 'User') {
      if (hoverShopping) setHoverShopping(false);
      setHoverUser(!hoverUser);
      return;
    }
    if (mName === 'Cart') {
      if (hoverUser) setHoverUser(false);
      setHoverShopping(!hoverShopping);
    }
  };

  let history = useHistory();
  function handleSearch() {
    history.push('/search/' + searchQuery);
  }
  function handleSearchInput(e) {
    if (e.key === 'Enter') return handleSearch();
  }
  return (
    <>
      <Header>
        <Container>
          <NavHeader>
            <NavCol>
              <LogoImg>
                <Link to="/">
                  <img src={img} alt="logo" />
                </Link>
              </LogoImg>
            </NavCol>
            <NavCol hideAt={'576'}>
              <SearchInput
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearchInput}
                placeholder="Buscar produtos, marcas,etc."
              />
              <SearchButton onClick={handleSearch}>
                <FaSearch />
              </SearchButton>
            </NavCol>
            <NavCol align="flex-end">
              <Link to="/cart">
                <NavMouseOver
                  id="cart"
                  onMouseEnter={() => setHoverShopping(true)}
                  onMouseLeave={() => setHoverShopping(false)}
                  onClick={() => toggleMenu('Cart')}>
                  <FaShoppingCart size="32" />
                  <NavDropDown cart active={hoverShopping}>
                    <Cart items={itemsOnCart} />
                  </NavDropDown>
                </NavMouseOver>
              </Link>
              <Link to={userInfo ? '/profile' : '/login'}>
                <NavMouseOver
                  id="user"
                  onMouseEnter={() => setHoverUser(true)}
                  onMouseLeave={() => setHoverUser(false)}>
                  <FaUser size="32" />
                  <NavDropDown active={hoverUser}>
                    <Account auth={userInfo} logout={logout} />
                  </NavDropDown>
                </NavMouseOver>
              </Link>
            </NavCol>
          </NavHeader>
        </Container>
      </Header>
      <SubHeader>
        <ContHead>
          <NavCol align="flex-start">
            <CatSub
              onMouseEnter={() => setHoverCategories(true)}
              onMouseLeave={() => setHoverCategories(false)}>
              <FaBars /> Categories
              <CatDropDown active={hoverCategories}>
                <Categories categories={categories} />
              </CatDropDown>
              <CatDetailsWrapper active={hoverCategories}>
                <CategoryDetails />
              </CatDetailsWrapper>
            </CatSub>
            {subheaderCategories.map((el) => (
              <CatLink key={el.name} href={el.link}>
                {el.name}
              </CatLink>
            ))}
            <CatLink color="FF0000" href="#">
              Sale
            </CatLink>
          </NavCol>
        </ContHead>
      </SubHeader>
    </>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.userLogin.userInfo,
  itemsOnCart: state.cart.cartItems,
});

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(StoreHeader);
