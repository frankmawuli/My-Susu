import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "",
                tabBarStyle: {
                    backgroundColor: '#F5EEDC', // or your preferred shade
                    borderTopWidth: 0,
                    position: 'absolute',
                    alignItems: 'center',
                    flexDirection: 'row',
                    elevation: 0,
                    height: 60,
                    paddingBottom: 30,
                    
                    
                    
                },
            }}
        >
            <Tabs.Screen
                name="chats"
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name="chatbubbles-outline" size={24} color="black" />,
                }}
            />
            <Tabs.Screen
                name="assets"
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name="wallet-outline" size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ size ,color}) => (
                        <Ionicons name="home" size={24}  />
                    ),
                }}
            />
            <Tabs.Screen
                name="discover"
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name="globe" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name="person-circle" size={24} color={color} />,
                }}
            />
        </Tabs>
    );
}
