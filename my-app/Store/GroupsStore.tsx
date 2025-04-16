import { create } from "zustand";
import { supabase } from "@/supabaseConfig";

interface Group {
    group_owner:string;
    group_name: string;
    group_description: string;
    group_image: string;
}



export const useGroupStore = create((set) => ({
    group: null,
    loading: false,

    createGroup: async (group_owner:string, group_name: string, group_description: string, group_image: string) => {
        set({ loading: true });

        const { data, error } = await supabase
            .from('Groups') // your table name
            .insert([
                {
                    group_owner: group_owner,
                    group_name:group_name,
                    group_description:group_description,
                    group_image:group_image,
                },
            ])
            .select()
            .single();

        if (error) {
            console.error('Error creating user:', error.message);
            set({ loading: false });
            return { error };
        }

        set({ group: data, loading: false });
        return { data };
    },

    getGroupById: async (id:string) => {
        set({ loading: true });

        const { data, error } = await supabase
            .from('Groups')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            console.error('Error fetching user:', error.message);
            set({ loading: false });
            return { error };
        }

        set({ group: data, loading: false });
        return { data };
    },

    UpdateGroup: async (groupId:string, group_owner:string, group_name:string, group_description:string) => {
        set({ loading: true });

        const { data, error } = await supabase
            .from('Groups')
            .update({
                group_owner,
                group_name,
                group_description,
            })
            .eq('id', groupId)
            .select()
            .single();

        if (error) {
            console.error('Error updating user:', error.message);
            set({ loading: false });
            return { error };
        }

        set({ group: data, loading: false });
        return { data };
    },

    DeleteGroup: async (groupId:string) => {
        set({ loading: true });

        const { data, error } = await supabase
            .from('Groups')
            .delete()
            .eq('id', groupId)
            .select()
            .single();

        if (error) {
            console.error('Error deleting user:', error.message);
            set({ loading: false });
            return { error };
        }

        set({ group: null, loading: false });
    },
}))