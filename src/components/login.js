import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView
} from 'react-native'
// call component //
import LoginForm from './loginForm.js'
export default class Login extends Component {
  render () {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo}
          source={require('./../image/logo.jpg')} />

          <Text style={styles.title}>
          An app made for github using react-native
          </Text>
        </View>

        <View style={styles.fromContainer}>
          <LoginForm />
        </View>

      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: 'white',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.8
  }
})
