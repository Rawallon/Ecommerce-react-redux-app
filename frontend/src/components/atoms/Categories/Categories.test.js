import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Categories from '.';

describe('Categories component', () => {
  it('Should be loading (null)', () => {
    const component = shallow(<Categories categories={{ loading: true }} />);
    expect(component.find('div')).toHaveLength(0);
  });

  var props = {
    loading: false,
    categoryList: ['First', 'Second'],
  };
  it('Should have two links', () => {
    const component = shallow(<Categories categories={props} />);
    expect(component.find(Link)).toHaveLength(2);
  });

  it('Links must be correct', () => {
    const component = shallow(<Categories categories={props} />);

    expect(component.find(Link).at(0).prop('to')).toBe(
      '/category/' + props.categoryList[0],
    );

    expect(component.find(Link).at(1).prop('to')).toBe(
      '/category/' + props.categoryList[1],
    );
  });
});
