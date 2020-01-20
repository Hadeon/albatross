import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Auth0 from 'react-native-auth0';
import { AUTH0_DOMAIN, AUTH0_CLIENT_ID } from 'react-native-dotenv';

const auth0 = new Auth0({ domain: AUTH0_DOMAIN, clientId: AUTH0_CLIENT_ID })

export default class Login extends Component {

  onLoginPress = () => {
    console.log('test');
    auth0
    .webAuth
    .authorize({scope: 'openid profile email'})
    .then(credentials =>
      // Successfully authenticated
      // Store the accessToken
      this.setState({ accessToken: credentials.accessToken })
    )
    .catch(error => console.log(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is a test for the login. Where the fuck is this?!?</Text>
        <Button onPress={this.onLoginPress} title="Login">Login</Button>
      </View>
    )
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: '#333',
    margin: 50
  }
})