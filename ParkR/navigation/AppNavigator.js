import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

// screens //

import SignUp from '../screens/SignUp';
import LogIn from '../screens/LogIn';
import Confirmation from '../screens/Confirmation';
import HomeScreen from '../screens/HomeScreen';
import Authentication from '../screens/Authentication';
import OtherScreen from '../screens/OtherScreen';


import MainTabNavigator from './MainTabNavigator';

// export default createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// });

const AppNavigator = createStackNavigator({
  Authentication: { screen: Authentication },
  Home: { screen: HomeScreen },
  Other: { screen: OtherScreen},
});

export default AppNavigator;