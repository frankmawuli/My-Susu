import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import PieChart from '@/Components/PieChart'
import LineChart from '@/Components/linechat'
import Header from '@/Components/Header'

export default function index() {
  return (
    <View style ={styles.container}>
      <Header icon="notifications-outline"/>
      <PieChart/>
      <LineChart/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
 })