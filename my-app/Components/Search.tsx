import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Explore here"
                placeholderTextColor="#999"
                style={styles.input}
            />
            <Feather name="search" size={20} color="#555" style={styles.icon} />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e1ecf2', // soft blue background
        borderRadius: 25,
        paddingHorizontal: 15,
        height: 40,
        width: '90%',
        alignSelf: 'center',
        marginVertical: 10,
    },
    input: {
        flex: 1,
        color: '#000',
    },
    icon: {
        marginLeft: 10,
    },
});
