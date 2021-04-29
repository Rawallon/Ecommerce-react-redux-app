import { shallow } from 'enzyme';

import { InputText } from './FormInput.style';

import FormInput from '.';

describe('Form Input Component', () => {
  const props = {
    name: 'name',
    type: 'text',
    value: '',
    label: 'Username',
    onChange: () => {},
    isInvalid: false,
    required: true,
    disabled: false,
    placeholder: 'Enter username',
  };

  it('Should display and empty input', () => {
    const component = shallow(<FormInput {...props} />);
    expect(component.find(InputText)).toHaveLength(1);
    expect(component.find(InputText).text()).toBe('');
  });

  it('Should call onChange', () => {
    const mockFn = jest.fn(); // spy
    const component = shallow(<FormInput {...props} onChange={mockFn} />);
    expect(component.find(InputText).text()).toBe('');
    component
      .find(InputText)
      .simulate('change', { target: { value: 'T' } })
      .simulate('change', { target: { value: 'e' } })
      .simulate('change', { target: { value: 's' } })
      .simulate('change', { target: { value: 't' } });
    expect(mockFn).toHaveBeenCalledTimes(4);
  });

  it('Should be invalid if empty', () => {
    const component = shallow(<FormInput {...props} />);
    expect(component.find(InputText).prop('isInvalid')).toBe(false);
    component.find(InputText).simulate('focus').simulate('blur');
    expect(component.find(InputText).prop('isInvalid')).toBe(true);
  });

  it('Should be invalid if passed by a prop', () => {
    const component = shallow(<FormInput {...props} isInvalid={true} />);
    expect(component.find(InputText).prop('isInvalid')).toBe(true);
  });
});
