import * as React from 'react';
import { mount } from 'enzyme';

import Card from '../card';

describe('Card', () => {
  const props = {
    iconsSrc: '',
    title: '',
    subtitle: '',
    children: ''
  };

  it('renders as expected', () => {
    const component = mount(<Card {...props} />);
    expect(component.exists()).toEqual(true);
  });
});
