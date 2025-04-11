import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

export default function TransactionCard({name, amount, time,type}: {name: string, amount: string, time: string, type: string}) {
    return (
        <View style={styles.container}>
            <View style={styles.iconWrapper}>
                <FontAwesome5 name="money-bill-wave" size={20} color="#f9c300" />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{type}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>

            <View style={styles.amountContainer}>
                <Text style={styles.amount}>{amount}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 12,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
    },
    iconWrapper: {
        backgroundColor: '#e6f0fa',
        padding: 10,
        borderRadius: 50,
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    subtitle: {
        fontSize: 13,
        color: '#555',
    },
    time: {
        fontSize: 12,
        color: 'gray',
        marginTop: 2,
    },
    amountContainer: {
        alignItems: 'flex-end',
    },
    amount: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 14,
    },
})
