import React from 'react';
import { View, FlatList } from 'react-native';
import ChatCard from './Chats'; // Make sure the import path matches

const groups = [
    {
        id: '1',
        name: 'Freeda Susu',
        message: 'Ama contributed ₵50 to the project.',
        time: '12:00 PM',
    },
    {
        id: '2',
        name: 'Church Building Fund',
        message: 'Kojo added ₵100 to the group.',
        time: '12:15 PM',
    },
    {
        id: '3',
        name: 'Community Water Project',
        message: 'Abena contributed ₵30 for the maintenance fee.',
        time: '12:20 PM',
    },
    {
        id: '5',
        name: 'School Fees Support',
        message: 'Yaw Mensah donated ₵200 to support Kofi’s fees.',
        time: '12:30 PM',
    },
    {
        id: '00',
        name: 'School Fees Support',
        message: 'Yaw Mensah donated ₵200 to support Kofi’s fees.',
        time: '12:30 PM',
    },
    {
        id: '6',
        name: 'School Fees Support',
        message: 'Yaw Mensah donated ₵200 to support Kofi’s fees.',
        time: '12:30 PM',
    },
    {
        id: '7',
        name: 'School Fees Support',
        message: 'Yaw Mensah donated ₵200 to support Kofi’s fees.',
        time: '12:30 PM',
    },
    {
        id: '9',
        name: 'School Fees Support',
        message: 'Yaw Mensah donated ₵200 to support Kofi’s fees.',
        time: '12:30 PM',
    },
];

export const getInitials = (name: string) => {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase();
};

export default function ChatList() {
    return (
        <FlatList
            data={groups}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <ChatCard
                    title={getInitials(item.name)}
                    name={item.name}
                    time={item.time}
                    message={item.message}
                />
            )}
            contentContainerStyle={{ paddingVertical: 10 }}
            scrollEnabled={true}
            
        />
    );
}
