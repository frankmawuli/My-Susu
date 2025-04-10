import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import InfoCard from './DiscoverCard'; 

const mockData = [
    {
        id: '1',
        title: 'Investing in $APECOIN',
        description: 'Investing in $APECOIN has never been simpler thanks to decentralization of Apechain.',
        imageUrl: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: '2',
        title: 'Exploring Web3 Gaming',
        description: 'Web3 gaming is transforming how we play and earn. Discover the latest trends.',
        imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: '3',
        title: 'Top DAOs to Watch',
        description: 'Decentralized Autonomous Organizations are reshaping governance. Here are the top picks.',
        imageUrl: 'https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
];

export default function InfoCardList() {
    return (
        <View style={styles.container}>
            <FlatList
                data={mockData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <InfoCard
                        title={item.title}
                        description={item.description}
                        imageUrl={item.imageUrl}
                    />
                )}
                contentContainerStyle={{ paddingVertical: 16 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
});
