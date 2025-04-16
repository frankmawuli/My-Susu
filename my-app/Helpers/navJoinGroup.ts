import {useRouter} from 'expo-router';

export default function useNavJoinGroup() {
    const router = useRouter();
    
    const handleJoin = () => {
        router.push('/OtherScreens/JoinGroup');
    };
    
    return { handleJoin};
}