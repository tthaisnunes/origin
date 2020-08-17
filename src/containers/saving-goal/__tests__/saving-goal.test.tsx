import * as React from 'react';
import { mount } from 'enzyme';

import SavingGoal from '../saving-goal';

describe('Saving Goal', () => {
  it('renders as expected', () => {
    const component = mount(<SavingGoal />);
    expect(component.exists()).toEqual(true);
  });
});
