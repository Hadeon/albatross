import React, { Component } from 'react';
import { 
  View, 
  Text, 
  AsyncStorage
} from 'react-native';

import Navbar from '../components/Navbar';

import { globalStyles } from '../styles/global';

export default class Dashboard extends Component {

  logoutAsync = async() => {
    await AsyncStorage.removeItem('accessToken');
    this.props.navigation.navigate('AuthLoading');
  }

  render() {
    return (
      <View style={globalStyles.container}>
        <Navbar logout={this.logoutAsync}/>
        <View style={globalStyles.appBody}>
          <Text style={globalStyles.headerText}>This is a test for a Starboy.</Text>
        </View>
      </View>
    )
  }
}