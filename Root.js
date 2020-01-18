import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './routes/Login';
import Dashboard from './routes/Dashboard';

const Root = StackNavigator(
  {
    Login: {
      screen: Login
    },
    Dashboard: {
      screen: Dashboard
    }
  },{
    initialRouteName: "Login"
  }
);

export default Root;