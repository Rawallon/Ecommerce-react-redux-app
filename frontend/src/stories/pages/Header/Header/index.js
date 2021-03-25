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

export default function StoreHeader({ itemsOnCart, auth, categories }) {
  const [hoverShopping, setHoverShopping] = useState(false);
  const [hoverUser, setHoverUser] = useState(false);
  const [hoverCategories, setHoverCategories] = useState(true);
  const cat = [
    'new releases',
    'on sale now',
    'bestsellers',
    'ROUPA',
    'TOPS',
    'VESTIDOS',
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
  return (
    <>
      <Header>
        <Container>
          <NavHeader>
            <NavCol>
              <LogoImg>
                <a href="#">
                  <img src={img} />
                </a>
              </LogoImg>
            </NavCol>
            <NavCol hideAt={'576'}>
              <SearchInput placeholder="Buscar produtos, marcas,etc." />
              <SearchButton>
                <FaSearch />
              </SearchButton>
            </NavCol>
            <NavCol align="flex-end">
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
              <NavMouseOver
                id="user"
                onMouseEnter={() => setHoverUser(true)}
                onMouseLeave={() => setHoverUser(false)}
                onClick={() => toggleMenu('User')}>
                <FaUser size="32" />
                <NavDropDown active={hoverUser}>
                  <Account auth={auth} />
                </NavDropDown>
              </NavMouseOver>
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
            {cat.map((el) => (
              <CatLink href="#">{el}</CatLink>
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
