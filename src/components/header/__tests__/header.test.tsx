import * as React from 'react';
import { mount } from 'enzyme';

import Header from '../header';

describe('Header', () => {
  it('renders as expected', () => {
    const component = mount(<Header />);
    expect(component.exists()).toEqual(true);
  });
});
