import React from 'react';
import { mount } from 'enzyme';

import Input from '../input';

describe('Input', () => {
  const props = { name: '', label: '' };

  it('renders as expected', () => {
    const component = mount(<Input {...props} />);
    expect(component.exists()).toEqual(true);
  });
});
