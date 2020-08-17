import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SavingGoal from './containers/saving-goal/saving-goal';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SavingGoal} />
        <Route path="/saving-goal" component={SavingGoal} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
