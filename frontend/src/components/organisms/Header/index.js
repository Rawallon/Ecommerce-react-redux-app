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
  const [hoverShopping, setHoverShopping] = useState(false);
  const [hoverUser, setHoverUser] = useState(false);
  const [hoverCategories, setHoverCategories] = useState(false);

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
              <NavMouseOver
                id="cart"
                onMouseEnter={() => setHoverShopping(true)}
                onMouseLeave={() => setHoverShopping(false)}
                onClick={() => history.push('/cart')}>
                <FaShoppingCart size="32" />
                <NavDropDown
                  cart
                  active={hoverShopping}
                  onClick={(e) => e.stopPropagation()}>
                  <Cart items={itemsOnCart} />
                </NavDropDown>
              </NavMouseOver>
              <NavMouseOver
                id="user"
                onMouseEnter={() => setHoverUser(true)}
                onMouseLeave={() => setHoverUser(false)}
                onClick={() => history.push('/profile')}>
                <FaUser size="32" />
                <NavDropDown
                  active={hoverUser}
                  onClick={(e) => e.stopPropagation()}>
                  <Account auth={userInfo} logout={logout} />
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
              <FaBars /> SHOP BY CATEGORY
              <CatDropDown active={hoverCategories}>
                <Categories categories={categoriesList} />
              </CatDropDown>
              {/* <CatDetailsWrapper active={hoverCategories}>
                <CategoryDetails
                  hoveredCat={hoveredCat}
                  featuredItems={featuredItemPerCategory}
                />
              </CatDetailsWrapper> */}
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