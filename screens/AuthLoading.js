import React, { Component } from 'react';
import { 
  AsyncStorage, 
  View, 
  ActivityIndicator,
  StatusBar
} from 'react-native';

import { globalStyles } from '../styles/global';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async() => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    this.props.navigation.navigate(accessToken ? 'App' : 'Auth');
  };

  render(){
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}

export default AuthLoadingScreen;