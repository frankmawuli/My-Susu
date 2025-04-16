import { useUserStore } from '@/Store/UserStore';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
 const [user,setUser] = useState({
  name: '',
  phoneNumber: '',
  password: '',
  email: '',
 });
 const [rePassword, setRePassword] = useState('');


  const router = useRouter();

  const { createUser } = useUserStore((state) => state)

  const handleLogin = () => {
    // Handle login logic here
    const message = `Signing up with: ${user.name}, ${user.phoneNumber},`;

    if(user.password !== rePassword){
      alert('Passwords do not match')
      return
    }
    if(user.name === '' || user.phoneNumber === '' || user.password === ''){
      alert('Please fill in all fields')
      return
    }
    createUser(user.name, user.phoneNumber, user.password)
    alert(message);
    
    router.push('/VerifyOtp')



 
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
        value={user.name}
        onChangeText={(e)=> setUser({...user, name: e})}
      />

      <Text>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="+233 XX XXX XXXX"
        keyboardType="phone-pad"
        value={user.phoneNumber}
        onChangeText={(e)=> setUser({...user, phoneNumber: e})}
      />

      <Text>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={user.password}
        onChangeText={(e)=> setUser({...user, password: e})}
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

      <TouchableOpacity style={styles.signupLink} onPress={() => router.back()}>
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
