import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const Login = ({ onSwitch, onRegister }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text variant="headlineMedium" style={styles.loginText}>Login</Text>
    </View>
    <TextInput 
      label="Phone number, username, or email" 
      mode="outlined" 
      style={styles.input} 
    />
    <TextInput 
      label="Password" 
      mode="outlined" 
      secureTextEntry 
      style={styles.input} 
    />
    <Button mode="contained" style={styles.button} onPress={() => {}}>
      Login
    </Button>
    <Button mode="text" onPress={onSwitch}>
      Forgot Password?
    </Button>
    <Button mode="text" onPress={onRegister}>
      Sign Up
    </Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    alignItems: 'center', 
    marginBottom: 20,
  },
  loginText: {
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 16,
    width: '90%',
    alignSelf: 'center', 
  },
  button: {
    marginBottom: 16,
    width: 180, 
    alignSelf: 'center', 
  },
});

export default Login;