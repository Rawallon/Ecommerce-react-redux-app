import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Account from '.';
import { MenuItem } from './Account.style';

describe('Account dropdown component', () => {
  var defaultProps = {
    auth: null,
    logout: () => {},
  };
  it('Not logged', () => {
    const component = shallow(<Account {...defaultProps} />);
    const linkButton = component.find(Link);
    expect(linkButton.at(0).prop('to')).toBe('/login');
    expect(linkButton.at(1).prop('to')).toBe('/register');
  });

  it('Should have logged user name', () => {
    const component = shallow(
      <Account {...defaultProps} auth={{ name: 'Test' }} />,
    );
    expect(component.find('h3').text()).toBe('Test');
  });

  it('Should execute Logout function', () => {
    const logoutFn = jest.fn(); // spy
    var defaultProps = {
      auth: { name: 'Test' },
      logout: logoutFn,
    };
    const component = shallow(<Account {...defaultProps} />);
    component.find(MenuItem).at(2).simulate('click');
    expect(logoutFn).toHaveBeenCalled();
  });
});
