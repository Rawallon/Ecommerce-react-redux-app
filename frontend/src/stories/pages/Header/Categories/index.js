import React, { useState } from 'react';
import {
  CartWrapper as Wrapper,
  MenuItem,
  MenuWrapper,
} from './Categories.style';
import { FiChevronRight, FiChevronsRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Categories({ categories, hoveredCat, setHoveredCat }) {
  const { loading, categoryList } = categories;

  if (loading) return <div>loading</div>;
  else
    return (
      <div>
        <Wrapper>
          <MenuWrapper>
            {categoryList.map((category, index) => (
              <MenuItem
                active={hoveredCat === 'category'}
                onMouseEnter={() => setHoveredCat(category)}
                key={category}>
                <Link to={'/category/' + category}>
                  {category}
                  {hoveredCat === category ? (
                    <FiChevronsRight />
                  ) : (
                    <FiChevronRight />
                  )}
                </Link>
              </MenuItem>
            ))}
          </MenuWrapper>
        </Wrapper>
      </div>
    );
}
