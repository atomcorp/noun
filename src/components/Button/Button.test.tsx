import React from 'react';
import {shallow} from 'enzyme';
import {Button} from './Button';

test('Button unstable_renderSubtreeIntoContainer', () => {
  const button = shallow(<Button />);
  expect(button.text()).toEqual('Hello');
  expect(button).toMatchSnapshot();
});
