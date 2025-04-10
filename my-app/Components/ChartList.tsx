import { View, Text, FlatList } from 'react-native';
import React from 'react';
import MessagePreview from './Chats'; // assumes MessagePreview component accepts name and message props

const messages = [
    {
        id: '1',
        name: 'Felix Ashong',
        text: 'We need to add more parts at the warehouse before Friday.',
    },
    {
        id: '2',
        name: 'Amina Bello',
        text: 'The report is ready. Please check your inbox.',
    },
    {
        id: '3',
        name: 'Kofi Mensah',
        text: 'Are we still on for the 3PM call?',
    },
    {
        id: '4',
        name: 'Sandra Opoku',
        text: 'Let’s finalize the presentation slides by tomorrow.',
    },
];

export default function ChatList() {
    return (
        <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <MessagePreview name={item.name} text={item.text} />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#eee' }} />}
            contentContainerStyle={{ paddingVertical: 10 }}
        />
    );
}
