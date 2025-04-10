import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // from Expo's icon pack

interface MessagePreviewProps {
    name: string;
    text: string;
}

const MessagePreview: React.FC<MessagePreviewProps> = ({ name, text }) => {
    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <MaterialIcons name="person" size={36} color="#000" />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.message} numberOfLines={1}>
                    {text}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    avatar: {
        backgroundColor: '#222',
        borderRadius: 999,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        marginLeft: 12,
        flexShrink: 1,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 2,
    },
    message: {
        fontSize: 14,
        color: '#555',
    },
});

export default MessagePreview;
