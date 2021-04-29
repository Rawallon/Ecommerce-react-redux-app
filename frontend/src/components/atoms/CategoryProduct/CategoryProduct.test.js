import React from 'react';
import { shallow } from 'enzyme';

import { Card, CardButton, CardSecondaryButton } from './CategoryProduct.style';

import { CategoryProduct } from '.';
import { Link } from 'react-router-dom';

describe('Category Product Component', () => {
  const prod = {
    countInStock: '5',
    category: 'Category',
    name: 'Product Name',
    price: 220.99,
    rating: '3.5',
    image: '/image.png',
    _id: '1',
  };

  it('Should be loading (null)', () => {
    const component = shallow(<CategoryProduct loading={true} />);
    expect(component.find(Card)).toHaveLength(0);
  });

  it('Should have a product', () => {
    const component = shallow(<CategoryProduct {...prod} loading={false} />);
    expect(component.find(Card)).toHaveLength(1);
    expect(component.find('img').prop('src')).toBe(prod.image);
    expect(component.find(Link).at(0).text()).toBe(prod.category);
    expect(component.find(Link).at(1).text()).toBe(prod.name);
  });

  it('Should have buttons', () => {
    const component = shallow(<CategoryProduct {...prod} loading={false} />);
    expect(component.find(CardButton)).toHaveLength(1);
    expect(component.find(CardSecondaryButton)).toHaveLength(1);
  });

  it('Should click buttons', () => {
    const mockFn = jest.fn(); // spy

    const component = shallow(
      <CategoryProduct
        {...prod}
        loading={false}
        addToCart={mockFn}
        listProductModalDetails={mockFn}
      />,
    );
    //component.find(CardButton).simulate('click'); // Needs Router!
    component.find(CardSecondaryButton).simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
