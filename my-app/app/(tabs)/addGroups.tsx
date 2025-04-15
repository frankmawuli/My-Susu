import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function addGroups() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    return (
        <View style={styles.container}>
            <Text style={styles.appName}>MySusu</Text>
            <Text style={styles.title}>Create Group</Text>

            <Text style={styles.label}>Group Name</Text>
            <TextInput 
                style={styles.input}
                placeholder="A name for the group"
                value={name}
                onChangeText={setName}
            />
            
            <Text style={styles.label}>Group Description</Text>
            <TextInput 
                style={[styles.input, styles.textArea]}
                placeholder="A description for the group"
                multiline
                numberOfLines={20}
                value={description}
                onChangeText={setDescription}
            />
            <TouchableOpacity style={styles.Button}>
                    <Text style={styles.buttonText}>Create</Text>
                    <Ionicons name='add' size={32}/>
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 13,
        marginBottom: 50,
        paddingLeft: 10,
        fontSize: 16,
      },
      title: {
        fontSize: 25,
        marginVertical: 20
      },
      appName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 20,
      },
      Button: {
        backgroundColor: '#FF8C00',
        padding: 15,
        borderRadius: 13,
        flexDirection: 'row',
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
      },
      textArea: {
        height: 120,
        textAlignVertical: 'top',
      },
      label: {
        marginTop: 15
      }
})
