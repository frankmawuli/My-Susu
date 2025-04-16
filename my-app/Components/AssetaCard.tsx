import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import Header from '@/Components/Header';
import { FontAwesome } from '@expo/vector-icons';

const CardData = [
    { icon: 'university', title: 'Pension', color: '#3498db' },
    { icon: 'money', title: 'Wallet', color: '#2ecc71' },
    { icon: 'bitcoin', title: 'Crypto', color: '#f39c12' },
    { icon: 'globe', title: 'Web3', color: '#9b59b6' },
];

export default function Assets() {
    return (
        <SafeAreaView style={styles.container}>
            

            <View style={styles.cardsContainer}>
                {CardData.map((item, index) => (
                    <Card
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        color={item.color}
                    />
                ))}
            </View>
        </SafeAreaView>
    );
}

interface CardProps {
    icon: string;
    title: string;
    color: string;
}

const Card = ({ icon, title, color }: CardProps) => {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={[styles.card, { backgroundColor: color }]}>
                <FontAwesome name={icon} size={40} color="#fff" />
                <Text style={styles.cardTitle}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    cardsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 20,
    },
    card: {
        width: 150,
        height: 150,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 10,
    },
});