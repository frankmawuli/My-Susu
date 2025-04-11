import { View, Text } from 'react-native'
import React from 'react'
import ChatList from '@/Components/ChatList'
import Header from '@/Components/Header'
import { FontAwesome } from '@expo/vector-icons'
import SearchBar from '@/Components/Search'

export default function chats() {
  return (
    <View style={{ flex: 1,}}>
      <Header icon={<FontAwesome name="plus" size={24} color="white" />}/>
      <SearchBar />

      <ChatList/>
      
      
    </View>
  )
}