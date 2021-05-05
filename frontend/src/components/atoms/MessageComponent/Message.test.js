import { shallow } from 'enzyme';
import Message from '.';
import { Alert } from '../../../styles/bootstrap.style';

describe('Messages Component', () => {
  it('Should be an error', () => {
    const component = shallow(
      <Message variant="danger">I have failed to fail</Message>,
    );
    expect(component.find(Alert).text()).toBe('I have failed to fail');
    expect(component.find(Alert).prop('variant')).toStrictEqual([
      '#712b29',
      '#f7dddc',
    ]);
  });
  it('Should be an info', () => {
    const component = shallow(<Message>Tested!</Message>);
    expect(component.find(Alert)).toHaveLength(1);
    expect(component.find(Alert).prop('variant')).toStrictEqual([
      '#10516c',
      '#d2ebf5',
    ]);
  });
});
