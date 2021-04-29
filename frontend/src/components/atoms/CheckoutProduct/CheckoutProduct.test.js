import React from 'react';
import { shallow } from 'enzyme';
import { CheckoutProduct } from '.';
import { Link } from 'react-router-dom';

describe('Checkout product', () => {
  const props = {
    product: { loading: false, error: false },
    listProductCart: () => {},
    pId: 1,
    qty: 1,
    propPrice: 10,
    propQty: 2,
  };

  //  TODO: test on the useEffect

  it('Should be Loading with <Prefetch />', () => {
    const component = shallow(
      <CheckoutProduct {...props} product={{ loading: true }} />,
    );
    expect(component.find('Prefetch')).toHaveLength(1);
  });

  it('Should print Error with <Prefetch />', () => {
    const component = shallow(
      <CheckoutProduct {...props} product={{ error: 'oh no' }} />,
    );
    expect(component.find('Prefetch')).toHaveLength(1);
  });

  it('Should display item', () => {
    const prod = {
      loading: false,
      error: false,
      _id: 1,
      name: 'Test',
      image: '/image.png',
    };
    const component = shallow(<CheckoutProduct {...props} product={prod} />);
    expect(component.find('img').prop('src')).toBe(prod.image);
    expect(component.find(Link).at(1).prop('to')).toBe(`/product/${prod._id}`);
    expect(component.find(Link).at(1).text()).toBe(prod.name);
  });
});
