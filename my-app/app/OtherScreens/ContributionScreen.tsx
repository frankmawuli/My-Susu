import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'


export default function ContributionScreen() {
    const router = useRouter()
    const [amount, setAmount] = useState('')
    const [note, setNote] = useState('')

    const handleContribution = () => {
        if (!amount) {
            Alert.alert('Missing Info', 'Please enter an amount.')
            return
        }

        // You would send this data to your backend here
        Alert.alert('Success', `You’ve contributed GHS ${amount}`)
        setAmount('')
        setNote('')
        router.push('/(tabs)')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.appName}>MySusu</Text>
            <Text style={styles.title}>Make a Contribution</Text>

            <Text style={styles.label}>Amount (GHS)</Text>
            <TextInput
                style={styles.input}
                placeholder="e.g. 50"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
            />

            <Text style={styles.label}>Note (optional)</Text>
            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Write a note..."
                multiline
                numberOfLines={4}
                value={note}
                onChangeText={setNote}
            />

            <TouchableOpacity style={styles.button} onPress={handleContribution}>
                <Ionicons name="cash-outline" size={22} color="#fff" />
                <Text style={styles.buttonText}>Submit Contribution</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
        backgroundColor: '#fff',
    },
    appName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
        color: '#444',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#555',
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 13,
        marginBottom: 20,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#FF8C00',
        padding: 15,
        borderRadius: 13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16,
    },
})
