import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

interface GroupCardProps {
    name: string;
    color: string;
    icon: React.ReactNode;
}

export default function GroupCard({ name, color ,icon}: GroupCardProps) {
    return (
        <TouchableOpacity style={styles.card}>
            <View style={[styles.iconWrapper, { backgroundColor: color }]}>
               {icon}
            </View>
            <Text style={styles.label}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 90,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
        marginHorizontal: 10,
    },
    iconWrapper: {
        padding: 15,
        borderRadius: 50,
        marginBottom: 8,
    },
    label: {
        fontSize: 12,
        fontWeight: '500',
        color: '#333',
    },
});
