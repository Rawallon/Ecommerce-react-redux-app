import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import Pagination from '.';
import { PaginateNumber } from './Pagination.style';

describe('Pagination component', () => {
  it('Should render three pages with correct props', () => {
    const props = {
      urlLink: '/test/',
      pages: 3,
      page: 1,
    };
    const component = shallow(<Pagination {...props} />);
    expect(component.find('span').text()).toBe(`Total of ${props.pages} pages`);
    expect(component.find(PaginateNumber).at(0).text()).toBe(
      String(props.page),
    );
    expect(component.find(Link).at(0).prop('to')).toBe(
      props.urlLink + props.page,
    );
  });
});
