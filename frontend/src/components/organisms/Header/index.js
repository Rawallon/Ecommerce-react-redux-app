import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa';

import { Container } from '../../../styles/main.styles';
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
} from './Header.style';

import img from './title.svg';
import Cart from '../../molecules/Cart';
import Categories from '../../atoms/Categories';
import Account from '../../atoms/Account';

export default function StoreHeader({
  userInfo,
  itemsOnCart,
  categoriesList,
  logout,
}) {
  const [searchQuery, setSearchQuery] = useState('');

  let history = useHistory();
  function handleSearch() {
    history.push('/search/' + searchQuery);
  }

  function handleSearchInput(e) {
    if (e.key === 'Enter') return handleSearch();
  }

  function handleLogout() {
    logout();
    history.push('/login');
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
              <NavMouseOver id="cart" onClick={() => history.push('/cart')}>
                <FaShoppingCart size="32" />
                <NavDropDown cart onClick={(e) => e.stopPropagation()}>
                  <Cart items={itemsOnCart} />
                </NavDropDown>
              </NavMouseOver>
              <NavMouseOver id="user" onClick={() => history.push('/profile')}>
                <FaUser size="32" />
                <NavDropDown onClick={(e) => e.stopPropagation()}>
                  <Account auth={userInfo} logout={handleLogout} />
                </NavDropDown>
              </NavMouseOver>
            </NavCol>
          </NavHeader>
        </Container>
      </Header>
      <SubHeader>
        <ContHead>
          <NavCol align="flex-start">
            <CatSub>
              <FaBars /> SHOP BY CATEGORY
              <CatDropDown>
                <Categories categories={categoriesList} />
              </CatDropDown>
            </CatSub>
            {!categoriesList.loading &&
              categoriesList.categoryList.map((el) => (
                <CatLink key={el} href={'/category/' + el}>
                  {el}
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
