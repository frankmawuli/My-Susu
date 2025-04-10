
import { View, FlatList } from 'react-native';
import React from 'react';
import MessagePreview from './Chats'; // This is your custom component

const groups = [
    {
        id: '1',
        name: 'Freeda Susu',
        text: 'Ama contributed ₵50 to the project.',
    },
    {
        id: '2',
        name: 'Church Building Fund',
        text: 'Kojo added ₵100 to the group.',
    },
    {
        id: '3',
        name: 'Community Water Project',
        text: 'Abena contributed ₵30 for the maintenance fee.',
    },
    {
        id: '4',
        name: 'School Fees Support',
        text: 'Yaw Mensah donated ₵200 to support Kofi’s fees.',
    },
];

export default function GroupsList() {
    return (
        <FlatList
            data={groups}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <MessagePreview name={item.name} text={item.text} />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#eee' }} />}
            contentContainerStyle={{ paddingVertical: 10 }}
        />
    );
}
