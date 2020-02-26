import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import AuthLoading from './screens/AuthLoading';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';

// const MainNavigator = createStackNavigator({
//   Login: {screen: Login},
//   Dashboard: {screen: Dashboard}
// });

const AppNavigator = createSwitchNavigator({ Dashboard: Dashboard });
const AuthNavigator = createSwitchNavigator({ Login: Login });

const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: AppNavigator,
      Auth: AuthNavigator
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);

export default Navigation;