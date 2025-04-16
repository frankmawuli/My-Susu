import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function AddGroup() {
    const [groupName, setGroupName] = useState('');
    const [groupId, setGroupId] = useState('');

    const handleAddGroup = () => {
        if (!groupName || !groupId) {
            Alert.alert('Error', 'Please fill in both fields');
            return;
        }

        // Example logic: You can replace this with a call to Supabase or any backend
        Alert.alert('Group Added', `Name: ${groupName}, ID: ${groupId}`);

        // Clear fields after submission
        setGroupName('');
        setGroupId('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Group Name</Text>
            <TextInput
                style={styles.input}
                value={groupName}
                onChangeText={setGroupName}
                placeholder="Enter group name"
            />

            <Text style={styles.label}>Group ID</Text>
            <TextInput
                style={styles.input}
                value={groupId}
                onChangeText={setGroupId}
                placeholder="Enter group ID"
            />

            <TouchableOpacity style={styles.button} onPress={handleAddGroup}>
                <Text style={styles.buttonText}>Add Group</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 40,
    },
    label: {
        fontSize: 16,
        marginTop: 16,
        marginBottom: 6,
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
    },
    button: {
        marginTop: 24,
        backgroundColor: '#0a84ff',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});
