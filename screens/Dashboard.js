import React, { Component } from 'react';
import { 
  View, 
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { setAccessToken } from '../_actions/auth';

import Navbar from '../components/Navbar';

import { globalStyles } from '../styles/global';

class Dashboard extends Component {
  logoutAsync = async() => {
    try {
      // await AsyncStorage.removeItem('accessToken');
      this.props.setAccessToken('');
      this.props.navigation.navigate('AuthLoading');
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={globalStyles.container}>
        <Navbar logout={this.logoutAsync}/>
        <View style={globalStyles.appBody}>
          <Text style={globalStyles.headerText}>This is a test. {this.props.accessToken}</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  accessToken: state.authReducer.accessToken
});

const mapDispatchToProps = { setAccessToken };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)