import { shallow } from 'enzyme';

import { ItemAlign } from './CartProduct.style';

import { CartProduct } from '.';

// This should mount, but it isn't compatible with React 17 yet
describe('Cart product component', () => {
  var defaultProps = {
    product: {
      countInStock: '10',
      category: 'Categeory',
      name: 'Product Name',
      price: 220.99,
      rating: '3.5',
      image: '/image.png',
      _id: '1',
    },
    pId: 1,
    qty: 2,
    listProductCart: () => {},
    remCart: () => {},
    loading: true,
    error: false,
  };
  it('Should be loading, render only <Prefetch />', () => {
    const component = shallow(<CartProduct {...defaultProps} loading={true} />);
    expect(component).toHaveLength(1);
  });

  it('Should have error, render only <Prefetch />', () => {
    const component = shallow(<CartProduct {...defaultProps} error={true} />);
    expect(component).toHaveLength(1);
  });

  it('Should render a product', () => {
    const component = shallow(
      <CartProduct {...defaultProps} loading={false} />,
    );
    expect(component.find('img')).toHaveLength(1);
    expect(component.find('img').prop('src')).toBe('/image.png');
    expect(component.find(ItemAlign).text()).toBe(
      '$' + defaultProps.product.price * defaultProps.qty,
    );
  });

  it('Remove by using button', () => {
    const mockFn = jest.fn(); // spy
    const component = shallow(
      <CartProduct {...defaultProps} loading={false} remCart={mockFn} />,
    );
    const removeBttn = component.find('button');
    expect(removeBttn).toHaveLength(1);
    removeBttn.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
