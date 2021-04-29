import { shallow } from 'enzyme';
import GiveRating from '.';

describe('Give Rating component', () => {
  it('Should render 3 out of 5 rating', () => {
    const component = shallow(
      <GiveRating currentRating={3} setCurrentRating={() => {}} />,
    );
    expect(component.find('BsStarFill')).toHaveLength(3);
    expect(component.find('BsStar')).toHaveLength(2);
  });

  it('Call function on star click', () => {
    const mockFn = jest.fn();
    const component = shallow(
      <GiveRating currentRating={1} setCurrentRating={mockFn} />,
    );
    expect(component.find('BsStarFill')).toHaveLength(1);
    expect(component.find('BsStar')).toHaveLength(4);
    component.find('BsStar').at(2).simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
