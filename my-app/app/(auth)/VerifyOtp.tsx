import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // If using expo-router
import { supabase } from '@/supabaseConfig'; // Adjust the import based on your project structure

const VerifyOtpScreen = () => {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter(); // Replace with useNavigation() if you're using React Navigation
    
    const handleVerifyOtp = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase.auth.verifyOtp({
                phone: "+233592865265", // Ideally pass this from a previous screen or state
                token: otp,
                type: 'sms',
            });

            if (error) {
                Alert.alert('Verification Failed', error.message);
            } else {
                Alert.alert('Success', 'OTP Verified Successfully!');
                // Navigate to the next screen after successful verification
                router.replace('/(tabs)'); // Adjust path as needed
            }
        } catch (err) {
            Alert.alert('Unexpected Error', err.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Enter OTP</Text>

            <TextInput
                style={styles.input}
                keyboardType="number-pad"
                maxLength={6}
                value={otp}
                onChangeText={setOtp}
                placeholder="6-digit code"
                placeholderTextColor="#888"
                textAlign="center"
            />

            <TouchableOpacity style={styles.button} onPress={handleVerifyOtp} disabled={loading}>
                {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Verify</Text>}
            </TouchableOpacity>
        </View>
    );
};

export default VerifyOtpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 32,
        textAlign: 'center',
    },
    input: {
        fontSize: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 20,
        letterSpacing: 4,
        color: '#000',
    },
    button: {
        backgroundColor: "#da630c",
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});
