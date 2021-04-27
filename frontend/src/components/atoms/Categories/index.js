import React, { useState } from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
  CartWrapper as Wrapper,
  MenuItem,
  MenuWrapper,
} from './Categories.style';

export default function Categories({ categories }) {
  const [hoveredCat, setHoveredCat] = useState(null);
  const { loading, categoryList } = categories;

  if (loading) return <div>loading</div>;

  return (
    <div>
      <Wrapper>
        <MenuWrapper onMouseLeave={() => setHoveredCat(null)}>
          {categoryList.map((category) => (
            <MenuItem
              active={hoveredCat === 'category'}
              onMouseEnter={() => setHoveredCat(category)}
              key={category}>
              <Link to={'/category/' + category}>
                {category}
                {hoveredCat === category ? <FiChevronsRight /> : ''}
              </Link>
            </MenuItem>
          ))}
        </MenuWrapper>
      </Wrapper>
    </div>
  );
}
