import { shallow } from 'enzyme';

import { Li } from './Breadcrumb.style';

import Breadcrumb from '.';

describe('Breadcrumb component', () => {
  it('Two links', () => {
    const props = [
      { name: 'Test', link: '/cart', active: true },
      { name: 'Test', link: '/cart', active: true },
    ];
    const component = shallow(<Breadcrumb links={props} />);
    expect(component.find(Li)).toHaveLength(2);
  });

  it('Only one active link', () => {
    const props = [
      { name: 'Test', link: '/cart', active: true },
      { name: 'Test', link: '/cart', active: false },
    ];
    const component = shallow(<Breadcrumb links={props} />);
    expect(component.find(Li).at(0).prop('active')).toBe(true);
    expect(component.find(Li).at(1).prop('active')).toBe(false);
  });
});
