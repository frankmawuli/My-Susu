import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ icon }: { icon: JSX.Element }) {
    return (
            <View style={styles.container}>
                <Text style={styles.text}>MySusu</Text>
                <View>
                    {icon}
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e87400',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomWidth: 0,    // Only show border on top & sides
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    icon: {
        marginLeft: 10,
    },
});
