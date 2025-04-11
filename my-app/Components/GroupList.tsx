import { View, Text, FlatList } from 'react-native'
import React from 'react'

import GroupCard from '@/Components/GroupCard'
import { FontAwesome5 } from '@expo/vector-icons'
import colors from '@/colors/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

const groupData = [
    {
        name: 'Create Group',
        color: colors.primary,
        icon: <MaterialCommunityIcons name="cash" size={30} color="white" />
    },
    {
        name: 'Loans',
        color: colors.blue,
        icon: <FontAwesome5 name="hand-holding-usd" size={24} color="white" />
    },
    {
        name: 'Pensions',
        color: colors.voilet,
        icon: <MaterialCommunityIcons name="office-building" size={30} color="white" />
    }
    ,
     {
        name: 'Stats',
        color: colors.red,
        icon:< Ionicons name = "stats-chart-outline" size = { 24} color = "white" />
    }
]

export default function GroupList() {
    return (
        <FlatList
            data={groupData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <GroupCard
                    name={item.name}
                    color={item.color}
                    icon={item.icon}
                />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingVertical: 8,
            }}
        />
    )
}
