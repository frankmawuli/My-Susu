import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface ChatCardProps {
    title: string;
    name: string;
    time: string;
    message: string;
}

const ChatCard: React.FC<ChatCardProps> = ({ title, name, time, message }) => {
    return (
        <View style={styles.card}>
            {/* Avatar */}
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>{title}</Text>
            </View>

            {/* Message Info */}
            <View style={styles.infoContainer}>
                <View style={styles.header}>
                    <Text style={styles.groupName}>{name}</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>
                <Text style={styles.message}>{message}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
        marginVertical: 5,
        marginHorizontal: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#2D9CDB',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    avatarText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    infoContainer: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    groupName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    time: {
        fontSize: 12,
        color: '#888',
    },
    message: {
        color: '#333',
    },
});

export default ChatCard;
