import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

// Screens //
import SignUp from '../screens/SignUp';
import LogIn from '../screens/LogIn';



const SignUpStack = createStackNavigator({
  Home: SignUp,
});

SignUpStack.navigationOptions = {
  tabBarLabel: 'SignUp',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};
const LogInStack = createStackNavigator({
  Home: LogIn,
});

LogInStack.navigationOptions = {
  tabBarLabel: 'LogIn',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};





export default createBottomTabNavigator({

  SignUpStack,
  LogInStack,
 
});
