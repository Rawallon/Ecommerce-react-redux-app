import { shallow } from 'enzyme';

import { Banner } from './ItemBanner.styles';

import ItemBanner from '.';
import { Link } from 'react-router-dom';
const props = {
  messageTitle: 'messageTitle',
  messageSubtitle: 'messageSubtitle',
  messageColor: '#fff',
  messageLink: '#',
  messageButton: 'messageButton',
  messageImage: 'messageImage',
};

describe('Item banner component', () => {
  it('Should not render while loading', () => {
    const component = shallow(
      <ItemBanner featuredMessage={props} loading={true} />,
    );
    expect(component.find(Banner)).toHaveLength(0);
  });

  it('Should according to props', () => {
    const component = shallow(
      <ItemBanner loading={false} featuredMessage={props} />,
    );
    expect(component.find(Banner)).toHaveLength(1);
    expect(component.find('h4').text()).toBe(props.messageSubtitle);
    expect(component.find('h3').text()).toBe(props.messageTitle);
    expect(component.find(Link).prop('to')).toBe(props.messageLink);
    expect(component.find('img').prop('src')).toBe(props.messageImage);
  });
});
