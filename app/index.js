import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useRouter } from 'expo-router'; // Import useRouter
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const router = useRouter(); // Initialize the router

  return (
    <SafeAreaView style={styles.container}>
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
      <Button 
        mode="contained" 
        style={styles.button} 
        onPress={() => router.replace('dashboard')}
      >
        Login
      </Button>
      <Button 
        mode="text" 
        onPress={() => router.push('Recovery')} // Navigate to Recover screen
      >
        Forgot Password?
      </Button>
      <Button 
        mode="text" 
        onPress={() => router.push('Register')} // Navigate to Register screen
      >
        Sign Up
      </Button>
    </SafeAreaView>
  );
};

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