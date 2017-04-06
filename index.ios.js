/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
// call Component //
import Login from './src/components/login.js'
export default class sign_in extends Component {
  render () {
    return (
      <Login />
    )
  }
}

AppRegistry.registerComponent('sign_in', () => sign_in)
