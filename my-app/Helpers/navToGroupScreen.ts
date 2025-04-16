import { useRouter } from "expo-router";

export function useNavToGroupScreen() {
    const router = useRouter();

    const handleToScreen = () => {
        router.push("/OtherScreens/GroupScreen");
    };

    return { handleToScreen };
}