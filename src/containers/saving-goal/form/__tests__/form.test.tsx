import * as React from 'react';
import { mount } from 'enzyme';

import Form from '../form';

describe('Form', () => {
  it('renders as expected', () => {
    const component = mount(<Form />);
    expect(component.exists()).toEqual(true);
  });
});
