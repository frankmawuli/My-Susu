import { View, Text } from 'react-native'
import React from 'react'
import Assets from '@/Components/AssetaCard'
import Header from '@/Components/Header'
import { FontAwesome } from '@expo/vector-icons'

export default function assets() {
  return (
    <View>
      <Header icon={<FontAwesome name="plus" size={24} color="white" />} />

      <Assets/>
    </View>
  )
}