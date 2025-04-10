import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ icon }: { icon: string }) {
    return (
        <SafeAreaView style={{ backgroundColor: '#f8f8f8' }}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.text}>My Susu</Text>
                </View>
                <Ionicons
                    name={icon}
                    size={24}
                    color="black"
                    style={styles.icon}
                    accessibilityLabel="Notifications"
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Ensures title is centered and icon is on the right
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        width: '100%',
    },
    titleContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        alignItems: 'center', // Centers the title horizontally
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    icon: {
        marginLeft: 'auto', // Pushes the icon to the right
    }
});