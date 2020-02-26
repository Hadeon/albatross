import React from 'react';
import {  
  View, 
  ActivityIndicator,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';

import { globalStyles } from '../styles/global';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async() => {
    try {
      // const accessToken = await AsyncStorage.getItem('accessToken');
      this.props.navigation.navigate(this.props.accessToken != ''  ? 'App' : 'Auth');
    } catch (err) {
      console.log(err);
    }
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

const mapStateToProps = state => ({
  accessToken: state.authReducer.accessToken
});

export default connect(mapStateToProps)(AuthLoadingScreen);