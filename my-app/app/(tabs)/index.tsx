import { View, ScrollView,Text} from 'react-native'
import React from 'react'
import BalanceCard from '@/Components/BalanceCard'
import Header from '@/Components/Header'
import GroupList from '@/Components/GroupList'
import ChatCard from '@/Components/Chats'
import TransactionCard from '@/Components/TransactionCard'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { getInitials } from '@/Components/ChatList'
const transactions = [
  {
    name: 'Grocery Shopping',
    amount: '-$45.00',
    time: 'Today, 10:15 AM',
    type: 'Expense',
  },
  {
    name: 'Salary',
    amount: '+$2,500.00',
    time: 'Yesterday, 3:00 PM',
    type: 'Income',
  },
  {
    name: 'Rent Payment',
    amount: '-$1,200.00',
    time: 'Last week, 1:00 PM',
    type: 'Expense',
  },
  
]


export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Header OUTSIDE ScrollView */}
      <Header icon={<FontAwesome name="plus" size={24} color="white" />}/>
      

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <BalanceCard />
        <GroupList />
        <Text style={{ fontSize: 15, fontWeight: 'bold', margin:15 ,color:"gray"}}>
          My Susu groups
        </Text>
        <ChatCard
          title={getInitials("joe doe")}
          name='Church Building Fund'
          message='Abena contributed ₵30 for the maintenance fee.'
          time='2:30 PM'

        />
        

        <ChatCard
          title ={getInitials("joe doe")}
          name='Abena Susu'
          message='Payment made from your account'
          time='2:30 PM'

        />
        <Text style={{ fontSize: 15, fontWeight: 'bold', margin: 20 ,color:"gray"}}>
          Recent Transactions
        </Text>


        {transactions.map((tx, index) => (
          <TransactionCard
            key={index}
            name={tx.name}
            amount={tx.amount}
            time={tx.time}
            type={tx.type}
          />
        ))}

       
      </ScrollView>
    </View>
  )
}
