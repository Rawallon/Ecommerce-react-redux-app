import { shallow } from 'enzyme';
import PictureDisplay from '.';
import { ImgThumb } from './pictureDisplay.style';

describe('Picture Display component', () => {
  it('Should render three images with the first active', () => {
    const component = shallow(
      <PictureDisplay images={['test', 'test1', 'test2']} />,
    );
    expect(component.find('img')).toHaveLength(4); // 3 on the side and 1 main
    expect(component.find(ImgThumb)).toHaveLength(3);
    expect(component.find('img').at(3).prop('src')).toBe('test');
    expect(component.find(ImgThumb).at(0).prop('active')).toBe(true);
  });

  it('Second image should be active on mouse enter', () => {
    const component = shallow(
      <PictureDisplay images={['test', 'test1', 'test2']} />,
    );
    expect(component.find(ImgThumb).at(1).prop('active')).toBe(false);
    expect(component.find('img').at(3).prop('src')).toBe('test');
    component.find(ImgThumb).at(1).simulate('mouseenter');
    expect(component.find(ImgThumb).at(1).prop('active')).toBe(true);
    expect(component.find('img').at(3).prop('src')).toBe('test1');
  });
});
