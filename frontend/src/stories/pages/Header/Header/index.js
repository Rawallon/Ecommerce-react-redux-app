import React, { useEffect, useState } from 'react';
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

//export default function StoreHeader({ itemsOnCart, auth, categories }) {
export default function StoreHeader({
  userInfo,
  itemsOnCart,
  categoriesList,
  logout,
  featuredItemPerCategory,
  fetchFeaturedItems,
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoverShopping, setHoverShopping] = useState(false);
  const [hoverUser, setHoverUser] = useState(false);
  const [hoverCategories, setHoverCategories] = useState(false);

  const [hoveredCat, setHoveredCat] = useState('');
  useEffect(() => {
    fetchFeaturedItems(hoveredCat);
  }, [hoveredCat]);

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
                <Categories
                  categories={categoriesList}
                  hoveredCat={hoveredCat}
                  setHoveredCat={setHoveredCat}
                />
              </CatDropDown>
              <CatDetailsWrapper active={hoverCategories}>
                <CategoryDetails
                  hoveredCat={hoveredCat}
                  featuredItems={featuredItemPerCategory}
                />
              </CatDetailsWrapper>
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
