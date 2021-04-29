import { shallow } from 'enzyme';

import { FormInput } from './FormRadio.style';

import FormRadio from '.';

describe('Form radio component', () => {
  const props = {
    labelText: 'Test',
    radioValue: 'radBtn',
    name: 'testing',
    checked: false,
    onChange: () => {},
  };

  it('Should render a unchecked radio button', () => {
    const component = shallow(<FormRadio {...props} />);
    expect(component.find(FormInput)).toHaveLength(1);
    expect(component.find(FormInput).prop('checked')).toBe(false);
  });

  it('Should render a checked radio button', () => {
    const component = shallow(<FormRadio {...props} checked={true} />);
    expect(component.find(FormInput)).toHaveLength(1);
    expect(component.find(FormInput).prop('checked')).toBe(true);
  });

  it('Should call function on change', () => {
    const mockFn = jest.fn();
    const component = shallow(<FormRadio {...props} onChange={mockFn} />);
    const radioBtn = component.find(FormInput);
    expect(radioBtn.prop('checked')).toBe(false);
    radioBtn.simulate('change', { target: { checked: true } });
    expect(mockFn).toHaveBeenCalled();
  });
});
