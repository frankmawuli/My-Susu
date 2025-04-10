import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';

const InfoCard = ({
    imageUrl = 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600',
    title = 'Investing in $APECOIN',
    description = 'Investing in $APECOIN has never been simpler thanks to decentralization of Apechain. Here a...',
    showActions = true
}) => {
    return (
        <View style={styles.card}>
            {/* Image Section */}
            <Image
                source={{ uri: imageUrl }}
                style={styles.image}
                resizeMode="cover"
            />

            {/* Content Section */}
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>

                {/* Actions Section */}
                {showActions && (
                    <View style={styles.actions}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={styles.actionButton}>
                                <SimpleLineIcons name="like" size={20} color="black" />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.actionButton}>
                                <SimpleLineIcons name="dislike" size={20} color="black" />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.actionButton}>
                            <Feather name="star" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
};

export default InfoCard;

const styles = StyleSheet.create({
    card: {
        width: '95%',
        borderRadius: 16,
        backgroundColor: '#fff',
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        marginVertical: 8,
        paddingBottom: 0,
        alignSelf: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    content: {
        padding: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        paddingHorizontal: 10,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    actionText: {
        marginLeft: 6,
        fontSize: 12,
        color: '#333',
    },
});
