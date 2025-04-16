import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    FlatList,
} from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'


import useNavToContribute from '@/Helpers/navToContribute'

export default function GroupScreen() {
    const { handleContribute } = useNavToContribute()
    const group = {
        name: 'Weekend Susu Gang',
        code: 'WSG123',
        description: 'We save every weekend to meet our monthly goals.',
        totalBalance: 'GHS 3,000',
        nextContribution: 'April 20, 2025',
        members: [
            { id: '1', name: 'John Doe', role: 'Admin' },
            { id: '2', name: 'Jane Smith', role: 'Member' },
            { id: '3', name: 'Kwame Boateng', role: 'Member' },
        ],
        contributions: [
            { id: '1', name: 'John', amount: 'GHS 50', date: 'Apr 14' },
            { id: '2', name: 'Jane', amount: 'GHS 50', date: 'Apr 13' },
        ],
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.appName}>MySusu</Text>

            <View style={styles.groupHeader}>
                <Text style={styles.groupName}>{group.name}</Text>
                <Text style={styles.groupInfo}>Code: {group.code}</Text>
                <Text style={styles.groupInfo}>Members: {group.members.length}</Text>
            </View>

            <Text style={styles.description}>{group.description}</Text>

            <View style={styles.balanceCard}>
                <Text style={styles.balanceLabel}>💰 Total Balance:</Text>
                <Text style={styles.balanceValue}>{group.totalBalance}</Text>
                <Text style={styles.nextContribution}>
                    Next Contribution: {group.nextContribution}
                </Text>
            </View>

            <Text style={styles.sectionTitle}>👥 Members</Text>
            {group.members.map((member) => (
                <Text key={member.id} style={styles.member}>
                    {member.name} {member.role === 'Admin' && <Text>(Admin)</Text>}
                </Text>
            ))}

            <Text style={styles.sectionTitle}>🧾 Latest Contributions</Text>
            {group.contributions.map((c) => (
                <Text key={c.id} style={styles.contribution}>
                    {c.name} paid {c.amount} on {c.date}
                </Text>
            ))}

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.actionButton} onPress={handleContribute} >
                    <Ionicons name="cash-outline" size={20} color="#fff" />
                    <Text style={styles.buttonText} >Contribute Now</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="receipt-outline" size={20} color="#fff" />
                    <Text style={styles.buttonText}>View Transactions</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.secondaryButton}>
                    <MaterialIcons name="chat-bubble-outline" size={20} color="#333" />
                    <Text style={styles.secondaryText}>Group Chat</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondaryButton}>
                    <Ionicons name="log-out-outline" size={20} color="#333" />
                    <Text style={styles.secondaryText}>Leave Group</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    appName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    groupHeader: {
        marginBottom: 10,
    },
    groupName: {
        fontSize: 24,
        fontWeight: '600',
        color: '#222',
    },
    groupInfo: {
        fontSize: 14,
        color: '#555',
    },
    description: {
        fontStyle: 'italic',
        color: '#444',
        marginBottom: 20,
    },
    balanceCard: {
        backgroundColor: '#FFDEAD',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    balanceLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    balanceValue: {
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 5,
    },
    nextContribution: {
        fontSize: 14,
        color: '#555',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 10,
    },
    member: {
        fontSize: 15,
        color: '#333',
        marginBottom: 5,
    },
    contribution: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    actionButton: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FF8C00',
        padding: 12,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 8,
    },
    secondaryButton: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#eee',
        padding: 12,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    secondaryText: {
        color: '#333',
        fontWeight: 'bold',
        marginLeft: 8,
    },
})
