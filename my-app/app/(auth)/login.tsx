import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useUserStore } from '@/Store/UserStore';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const { logUserIn } = useUserStore();

  const handleLogin = async () => {
    if (phoneNumber === '' || password === '') {
      alert('Please fill in all fields');
      return;
    }

    try {
      const userExist = await logUserIn(phoneNumber, password); // Await the Promise
      if (userExist?.data) { // Check if the user data exists
        alert('Login successful!');
        router.push("/VerifyOtp"); // Explicitly cast the path to match the expected type
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>MySusu</Text>
        <Text style={styles.slogan}>Save Together. Borrow Smart. Grow Wealth.</Text>
      </View>

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

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupLink} onPress={() => router.push('/signUp')}>
        <Text>Don't have an account? </Text>
        <Text style={styles.signupText}>Sign Up</Text>
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
