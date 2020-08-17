import * as React from 'react';
import { mount } from 'enzyme';

import DatePicker from '../date-picker';

describe('Date Picker', () => {
  const props = { name: '', label: '' };

  it('renders as expected', () => {
    const component = mount(<DatePicker {...props} />);
    expect(component.exists()).toEqual(true);
  });
});
