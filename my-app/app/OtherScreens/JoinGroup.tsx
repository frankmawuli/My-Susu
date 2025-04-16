import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

import { useNavToGroupScreen } from '@/Helpers/navToGroupScreen'


export default function JoinGroup() {
  const [groupCode, setGroupCode] = useState('')
  const { handleToScreen } = useNavToGroupScreen()

  const handleJoin = () => {
    // TODO: Add logic to verify and join the group using groupCode
    console.log('Joining group with code:', groupCode)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>MySusu</Text>
      <Text style={styles.title}>Join Group</Text>

      <Text style={styles.label}>Enter Group Code</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter group code"
        value={groupCode}
        onChangeText={setGroupCode}
      />

      <TouchableOpacity style={styles.Button} onPress={handleToScreen}>
        <Text style={styles.buttonText}>Join</Text>
        <Ionicons name="log-in-outline" size={28} color="white" style={{ marginLeft: 10 }} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 30,
    marginTop: 20,
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  title: {
    fontSize: 25,
    marginVertical: 20
  },
  label: {
    marginTop: 15,
    fontSize: 16,
    color: '#333'
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 13,
    marginBottom: 40,
    paddingLeft: 10,
    fontSize: 16,
  },
  Button: {
    backgroundColor: '#228B22',
    padding: 15,
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
})
