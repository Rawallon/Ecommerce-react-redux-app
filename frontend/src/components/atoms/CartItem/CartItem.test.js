import { shallow } from 'enzyme';

import { ItemCenterText, SelectQty } from './CartItem.styles';
import { ButtonPrimary } from '../../../styles/bootstrap.style';

import { CartItem } from '.';

// This should mount, but it isn't compatible with React 17 yet
describe('Cart Item component', () => {
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
    changeQtyCart: () => {},
    remCart: () => {},
    pId: 1,
    qty: 3,
    loading: true,
    error: false,
  };
  it('Should be loading, render only <Prefetch />', () => {
    const component = shallow(<CartItem {...defaultProps} loading={true} />);
    expect(component).toHaveLength(1);
  });

  it('Should have error, render only <Prefetch />', () => {
    const component = shallow(<CartItem {...defaultProps} error={true} />);
    expect(component).toHaveLength(1);
  });

  it('Should render product', () => {
    const component = shallow(<CartItem {...defaultProps} loading={false} />);
    expect(component.find('img')).toHaveLength(1);
    expect(component.find('img').prop('src')).toBe('/image.png');
    expect(component.find(ItemCenterText).text()).toBe(
      '$' + defaultProps.product.price * defaultProps.qty,
    );
  });

  it('Remove by changing quantity', () => {
    const mockFn = jest.fn(); // spy

    const component = shallow(
      <CartItem {...defaultProps} loading={false} remCart={mockFn} />,
    );
    const select = component.find(SelectQty);
    expect(select.prop('value')).toBe(3);
    select.simulate('change', { target: { value: '0' } });
    expect(mockFn).toHaveBeenCalled();
  });

  it('Remove by using button', () => {
    const mockFn = jest.fn(); // spy
    const component = shallow(
      <CartItem {...defaultProps} loading={false} remCart={mockFn} />,
    );
    const removeBttn = component.find(ButtonPrimary);
    expect(removeBttn).toHaveLength(1);
    removeBttn.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  it('Change quantity', () => {
    const mockFn = jest.fn(); // spy

    const component = shallow(
      <CartItem {...defaultProps} loading={false} changeQtyCart={mockFn} />,
    );
    const select = component.find(SelectQty);
    expect(select.prop('value')).toBe(3);
    select.simulate('change', { target: { value: '1' } });
    expect(mockFn).toHaveBeenCalled();
  });
});
