import { useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const Register = ({ }) =>{
  const router = useRouter();

  return(
  <View style={styles.container}>
    <View style={styles.header}>
      <Text variant="headlineMedium" style={styles.registerText}>Create an account</Text>
    </View>
    <TextInput label="Name" mode="outlined" style={styles.input} />
    <TextInput label="Email" mode="outlined" style={styles.input} />
    <TextInput label="Password" mode="outlined" secureTextEntry style={styles.input} />
    <Button mode="contained" style={styles.button} onPress={() => {console.log("Register")}}>
      Sign Up
    </Button>
    <Button mode="text" onPress={() => router.replace('/')}>
      Already have an account? Login
    </Button>
  </View>
)};

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
  registerText: {
    fontWeight: 'bold', 
  },
  input: {
    marginBottom: 16,
    width: '90%', 
    alignSelf: 'center', 
  },
  button: {
    marginBottom: 16,
    width: 120, 
    alignSelf: 'center', 
  },
});

export default Register;