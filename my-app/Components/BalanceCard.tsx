import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';

import colors from '@/colors/colors'; // Assuming you're using this elsewhere

export default function BalanceCard() {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>Total Balance</Text>
            <Text style={styles.balance}>GH₵ 1,250.00</Text>
            <View style={styles.actions}>
                <TouchableOpacity style={styles.button}>
                    <AntDesign name="pluscircleo" size={24} color="white" />
                    <Text style={styles.buttonText}>Deposit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <AntDesign name="minuscircleo" size={24} color="white" />
                    <Text style={styles.buttonText}>Withdraw</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <FontAwesome name="exchange" size={24} color="white" />
                    <Text style={styles.buttonText}>Transfer</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#e87400',
        borderRadius: 15,
        padding: 25,
        width: 350,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        marginVertical: 20,
        marginHorizontal: 20,
    },
    title: {
        color: 'white',
        fontSize: 16,
        marginBottom: 5,
    },
    balance: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    actions: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        gap: 50,
        paddingLeft: 20,
    },
    button: {
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        marginTop: 5,
        fontSize: 12,
    },
});
