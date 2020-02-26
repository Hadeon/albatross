import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';

const NavigationMenu = () => {
  return (
    <View style={styles.navigationMenuContainer}>
      <View style={styles.navigationMenuBody}>
        <Text style={styles.headerText}>Test Menu</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navigationMenuContainer: {
    flex: 1,
    backgroundColor: '#0a1a30'
  },
  navigationMenuBody: {
    paddingTop: 50,
    paddingLeft: 40
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default NavigationMenu;