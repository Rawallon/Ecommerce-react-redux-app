import React, { useState } from 'react';
import {
  CartWrapper as Wrapper,
  MenuItem,
  MenuWrapper,
} from './Categories.style';
import { FiChevronRight, FiChevronsRight } from 'react-icons/fi';

export default function Categories({ categories }) {
  const [hoverCat, setHoverCat] = useState(0);

  return (
    <>
      <Wrapper>
        <MenuWrapper>
          {categories.map((category, index) => (
            <MenuItem
              active={hoverCat === index}
              onMouseEnter={() => setHoverCat(index)}
              key={category.name}>
              <a href={category.link}>
                {category.name}
                {hoverCat === index ? <FiChevronsRight /> : <FiChevronRight />}
              </a>
            </MenuItem>
          ))}
        </MenuWrapper>
      </Wrapper>
    </>
  );
}
