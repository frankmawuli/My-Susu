import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    const message = `Signing up with: ${name}, ${phoneNumber}, ${password}`;
    alert(message);
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.appName}>MySusu</Text>
        <Text style={styles.slogan}>Save Together. Borrow Smart. Grow Wealth.</Text>
      </View>

      <Text>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        value={name}
        onChangeText={setName}
      />

      <Text>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="+233 XX XXX XXXX"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <Text>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        secureTextEntry
        value={rePassword}
        onChangeText={setRePassword}
      />

      <Text style={{paddingBottom: 13}}>By signing up, you agree to our Terms of Service and Privacy Policy</Text>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupLink}>
        <Text>Already have an account? </Text>
        <Text style={styles.signupText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  slogan: {
    fontSize: 16,
    color: '#666',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 13,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#FF8C00',
    padding: 15,
    borderRadius: 13,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  signupLink: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  signupText: {
    color: '#ff8c00',
    fontSize: 16,
    fontWeight: 'bold'
  },
});

export default LoginScreen;
