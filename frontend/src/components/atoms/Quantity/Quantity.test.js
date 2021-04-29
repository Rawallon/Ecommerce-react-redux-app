import { shallow } from 'enzyme';
import Quantity from '.';
import { PlusButton, QtyInput, Wrapper } from './quantity.style';

describe('Quantity component', () => {
  const props = {
    qty: 2,
    setQty: () => {},
    numInStock: 4,
  };

  it('Should render component', () => {
    const component = shallow(<Quantity {...props} />);
    expect(component.find(Wrapper)).toHaveLength(1);
    expect(component.find(QtyInput).prop('value')).toBe(props.qty);
  });

  it('Should add to quantity', () => {
    const mockFn = jest.fn();
    const component = shallow(<Quantity {...props} setQty={mockFn} />);
    expect(component.find(QtyInput).prop('value')).toBe(props.qty);
    component.find(PlusButton).simulate('click');
    component.setProps({ qty: props.qty + 1 });
    expect(mockFn).toHaveBeenCalled();
    expect(component.find(QtyInput).prop('value')).toBe(props.qty + 1);
  });

  it('Should not add over the max in stock', () => {
    const mockFn = jest.fn();
    const component = shallow(
      <Quantity {...props} qty={props.numInStock} setQty={mockFn} />,
    );
    expect(component.find(QtyInput).prop('value')).toBe(props.numInStock);
    expect(component.find(QtyInput).prop('warn')).toBe(false);
    component.find(PlusButton).simulate('click');
    expect(mockFn).not.toHaveBeenCalled();
    expect(component.find(QtyInput).prop('warn')).toBe(true);
  });
});
