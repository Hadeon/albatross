import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';

import NavigationMenu from './NavigationMenu';

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
      <Swiper showButtons={false} index={1} loop={false}>
        <NavigationMenu/>
        <View>
          <Navbar logout={this.logoutAsync}/>
          <View style={styles.dashboardContainer}>
            <Text style={styles.headerText}>This is a test. {this.props.accessToken}</Text>
          </View>
        </View>
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  dashboardContainer: {
    backgroundColor: '#34495e',
    height: '100%',
    padding: 10
  },
  headerText: {
    color: 'white'
  }
})

const mapStateToProps = state => ({
  accessToken: state.authReducer.accessToken
});

const mapDispatchToProps = { setAccessToken };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)