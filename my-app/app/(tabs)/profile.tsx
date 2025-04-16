import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>MYSUSU</Text>
        <Ionicons name={'menu'} size={32} />
      </View>

      <View>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=3' }} // Online placeholder image
          style={styles.avatar}
        />
      </View>

      <View style={styles.container2}>
        <View>
          <Text>Nutifata</Text>
          <Text>Give everything a try before...</Text>
        </View>
        <Ionicons name='pencil-outline' size={25} />
      </View>

      <View style={styles.container3}>
        <View style={styles.box}>
          <Ionicons name='notifications-outline' size={17} style={{ paddingHorizontal: 15, paddingVertical: 8 }} />
          <Text>Notifications and Sounds</Text>
        </View>
        <View style={styles.box}>
          <Ionicons name='notifications-outline' size={17} style={{ paddingHorizontal: 15, paddingVertical: 8 }} />
          <Text>Privacy and Security</Text>
        </View>
        <View style={styles.box}>
          <Ionicons name='notifications-outline' size={17} style={{ paddingHorizontal: 15, paddingVertical: 8 }} />
          <Text>Appearance</Text>
        </View>
        <View style={styles.box}>
          <Ionicons name='notifications-outline' size={17} style={{ paddingHorizontal: 15, paddingVertical: 8 }} />
          <Text>Language</Text>
        </View>
        <View style={styles.box}>
          <Ionicons name='notifications-outline' size={17} style={{ paddingHorizontal: 15, paddingVertical: 8 }} />
          <Text>Account</Text>
        </View>
      </View>

      <View style={styles.container3}>
        <View style={styles.box}>
          <Ionicons name='notifications-outline' size={17} style={{ paddingHorizontal: 15, paddingVertical: 8 }} />
          <Text>Data and Storage</Text>
        </View>
        <View style={styles.box}>
          <Ionicons name='notifications-outline' size={17} style={{ paddingHorizontal: 15, paddingVertical: 8 }} />
          <Text>Invite a friend</Text>
        </View>
        <View style={styles.box}>
          <Ionicons name='notifications-outline' size={17} style={{ paddingHorizontal: 15, paddingVertical: 8 }} />
          <Text>Kaisen FAQ</Text>
        </View>

      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                  // Fills the entire screen
    alignItems: 'center',     // Center content horizontally
    justifyContent: 'center', // Center content vertically
    backgroundColor: '#f0f8ff',
    padding: 30
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,        // Makes the image round
    marginBottom: 20,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container2: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4e89ae',
    padding: 15,
    borderRadius: 13,
    margin: 10
  },
  container3: {
    width: '100%',
    backgroundColor: '#4e89ae',
    padding: 10,
    borderRadius: 13,
    margin: 10
  }
});