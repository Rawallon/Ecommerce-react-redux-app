import { shallow } from 'enzyme';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import Rating from '.';

describe('Rating icon component', () => {
  it('Should render two out five stars rating', () => {
    const component = shallow(<Rating rating={2} count={10} />);
    expect(component.find(BsStarFill)).toHaveLength(2);
    expect(component.find('span').text()).toBe('(10)');
  });
  it('Should render two and a half stars rating', () => {
    const component = shallow(<Rating rating={2.5} count={15} />);
    expect(component.find(BsStarFill)).toHaveLength(2);
    expect(component.find(BsStarHalf)).toHaveLength(1);
    expect(component.find('span').text()).toBe('(15)');
  });
});
