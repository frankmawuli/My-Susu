import { create } from 'zustand'
import { supabase } from '@/supabaseConfig'
import sendOtp from '@/Helpers/sendOtp';

interface User {
    id?: number;
    full_name: string;
    phone_number: string;
    password?: string; // ⚠️ Not recommended to store plain passwords!
}

interface UserStore {
    user: User | null;
    loading: boolean;
    createUser: (fullName: string, phoneNumber: string, password: string) => Promise<{ data?: User; error?: any }>;
    logUserIn: (phoneNumber: string, password: string) => Promise<{ data?: User; error?: any }>;
    UpdateUser: (userId: number, fullName: string, phoneNumber: string) => Promise<{ data?: User; error?: any }>;
    DeletAccount: (userId: number) => Promise<{ data?: User | null; error?: any }>;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    loading: false,

    createUser: async (fullName, phoneNumber, password) => {
        set({ loading: true });

        const { data, error } = await supabase
            .from('Users') // your table name
            .insert([
                {
                    full_name: fullName,
                    phone_number:phoneNumber,
                    password: password, // ⚠️ Not recommended to store plain passwords!
                },
            ])
            .select()
            .single();

        if (error) {
            console.error('Error creating user:', error.message);
            set({ loading: false });
            return { error };
        }

        set({ user: data, loading: false });
        sendOtp(phoneNumber); 
        return { data };
    },

    logUserIn: async (phoneNumber, password) => {
        set({ loading: true });

        const { data, error } = await supabase
            .from('Users')
            .select('*')
            .eq('phone_number', phoneNumber)
            .eq('password', password)
            .single();

        if (error) {
            console.error('Error logging in:', error.message);
            set({ loading: false });
            return { error };
        }

        set({ user: data, loading: false });
        sendOtp(phoneNumber); 
        return { data };
    },

    // Edit User Details
    UpdateUser: async (userId, fullName, phoneNumber) => {
        set({ loading: true });

        const { data, error } = await supabase
            .from('users')
            .update({ full_name: fullName, phone_number: phoneNumber })
            .eq('id', userId)
            .select()
            .single();

        if (error) {
            console.error('Error updating user:', error.message);
            set({ loading: false });
            return { error };
        }

        set({ user: data, loading: false });
        return { data };
    },

    DeletAccount: async (userId) => {
        set({ loading: true });

        const { data, error } = await supabase
            .from('users')
            .delete()
            .eq('id', userId)
            .select()
            .single();

        if (error) {
            console.error('Error deleting user:', error.message);
            set({ loading: false });
            return { error };
        }

        set({ user: null, loading: false });
        return { data };
    },
}));
