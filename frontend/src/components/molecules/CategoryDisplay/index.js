import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { listFeaturedCategoryItems } from '../../../actions/shopActions';
import {
  CategoryImage,
  CategoryImageLink,
  CategoryItems,
  CategoryTitle,
  Wrapper,
} from './CategoryDisplay.style';
import { FaChevronRight } from 'react-icons/fa';

import Product from '../../atoms/CategoryProduct';

export function CategoryDisplay({
  loading,
  featuredCategory,
  featuredCategoryProducts,
  listFeaturedCategoryItems,
}) {
  const {
    featuredCategoryImage,
    featuredCategoryTitle,
    featuredCategoryColor,
    featuredCategoryCategoryName,
  } = featuredCategory || {};
  useEffect(() => {
    if (featuredCategoryCategoryName)
      listFeaturedCategoryItems(featuredCategoryCategoryName);
  }, [
    featuredCategoryCategoryName,
    featuredCategoryTitle,
    listFeaturedCategoryItems,
  ]);
  return (
    <Wrapper>
      <CategoryImage background={featuredCategoryColor}>
        <CategoryTitle>
          <h3>{featuredCategoryTitle}</h3>
          <a href={`/category/${featuredCategoryCategoryName}`}>
            Shop for {featuredCategoryCategoryName} <FaChevronRight size={15} />
          </a>
        </CategoryTitle>
        <CategoryImageLink href={`/category/${featuredCategoryCategoryName}`}>
          <img src={featuredCategoryImage} alt="" />
        </CategoryImageLink>
      </CategoryImage>
      <CategoryItems>
        {!loading &&
          featuredCategoryProducts &&
          featuredCategoryProducts.map((item) => (
            <Product small key={item._id} showButtons={false} {...item} />
          ))}
      </CategoryItems>
    </Wrapper>
  );
}

const mapStateToProps = (state) => ({
  featuredCategoryProducts: state.featuredCategory.products,
});

const mapDispatchToProps = {
  listFeaturedCategoryItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDisplay);
