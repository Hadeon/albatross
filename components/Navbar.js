import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default class Navbar extends Component {
  render(){
    return (
      <View style={styles.navbarContainer}>
        <Text style={styles.navbarItem}>This is a Navbar</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={this.props.logout}>
          <Text style={{color:'white'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    height: 75,
    width: '100%',
    backgroundColor: '#0a1a30',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  navbarItem: {
    backgroundColor: '#0a1a30',
    padding: 10,
    flex: 3,
    fontWeight: 'bold',
    color: 'white'
  },
  logoutButton: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#333'
  }
})