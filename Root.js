import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './routes/Login'

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Login: {screen: Login},
});

const Root = createAppContainer(MainNavigator);

export default Root;