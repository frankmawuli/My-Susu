import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '@/Components/Header'
import SearchBar from '@/Components/Search'
import ChatList from '@/Components/ChartList'
import GroupsList from '@/Components/GroupsList'

export default function ChatsScreen() {
  const [activeTab, setActiveTab] = useState<'chats' | 'groups'>('chats')

  return (
    <View>
      <Header icon='menu' />
      <SearchBar />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'chats' ? <ChatList /> : <GroupsList />}
    </View>
  )
}

const Tabs = ({ activeTab, setActiveTab }: { activeTab: 'chats' | 'groups', setActiveTab: (tab: 'chats' | 'groups') => void }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
      <TouchableOpacity onPress={() => setActiveTab('chats')}>
        <Text style={{ fontWeight: activeTab === 'chats' ? 'bold' : 'normal' }}>Chats</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActiveTab('groups')}>
        <Text style={{ fontWeight: activeTab === 'groups' ? 'bold' : 'normal' }}>Groups</Text>
      </TouchableOpacity>
    </View>
  )
}
