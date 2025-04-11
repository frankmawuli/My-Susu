import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/Components/Header'
import SearchBar from '@/Components/Search'
import InfoCard from '@/Components/DiscoverCard'
import InfoCardList from '@/Components/InfoCardList'
import { AntDesign } from '@expo/vector-icons'

export default function discover() {
  return (
    <View style={{ flex: 1,}}>
      <Header icon={<AntDesign name="book" size={24} color="white" />}/>
      <SearchBar/>
      <InfoCardList/>
      
      
    </View>
  )
}