import React, { Component } from 'react';
import Auth0 from 'react-native-auth0';
import { AUTH0_DOMAIN, AUTH0_CLIENT_ID } from 'react-native-dotenv';
import { 
  View, 
  Text, 
  StyleSheet,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';

const auth0 = new Auth0({ domain: AUTH0_DOMAIN, clientId: AUTH0_CLIENT_ID })

export default class Login extends Component {

  onLoginPress = async () => {
    await auth0
    .webAuth
    .authorize({scope: 'openid profile email'})
    .then(credentials => {
      AsyncStorage.setItem('accessToken', credentials.accessToken)
      this.props.navigation.navigate('App');
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>Welcome to Albatross.</Text>
        <TouchableOpacity onPress={() => (this.onLoginPress())} title="Login" style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  text: {
    color: '#333',
    margin: 50
  },
  loginButton: {
    backgroundColor: '#27ae60',
    marginTop: 25,
    paddingTop: 10,
    paddingRight: 50,
    paddingBottom: 10,
    paddingLeft: 50,
    borderRadius: 5,
    shadowColor: '#333',
    shadowRadius: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: .3
  },
  loginText: {
    color: '#fff',
    fontSize: 20
  },
  textHeader: {
    fontSize: 15
  }
})