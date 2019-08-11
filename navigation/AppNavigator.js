import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Loading from '../components/Loading'
import SignUp from '../components/userInfo/SignUp'
import Login from '../components/userInfo/Login'
import  Main from  '../components/Main'
import MyMaps from '../components/MyMaps'

export default createAppContainer(
  createSwitchNavigator({
    Loading,
    Login,
    SignUp,
    Main,
    MyMaps
  },
  {
    initialRouteName: 'Loading',
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
  })
);
