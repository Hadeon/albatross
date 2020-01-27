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
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    height: 75,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  navbarItem: {
    backgroundColor: '#999',
    padding: 10,
    flex: 3
  },
  logoutButton: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'coral'
  }
})