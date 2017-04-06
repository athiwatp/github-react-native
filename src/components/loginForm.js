import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'

export default class LoginForm extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="username or email"
          placeholderTextColor="white"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          placeholderTextColor="white"
          secureTextEntry
          returnKeyType="go"
          ref={(input) => this.passwordInput = input}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
 const styles = StyleSheet.create({
   container: {
     padding: 20
   },
   input: {
     height: 40,
     backgroundColor: '#2980b9',
     marginBottom: 10,
     color: 'white',
     paddingHorizontal: 10
   },
   buttonContainer: {
     backgroundColor: '#2980b9',
     paddingVertical: 15
   },
   buttonText: {
     textAlign: 'center',
     color: 'white',
     fontWeight: '700'
   }
 })
