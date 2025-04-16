import { useRouter } from "expo-router";

export function useNavToGroups() {
    const router = useRouter();

    const handleNavigation = () => {
        router.push("/OtherScreens/CreateGroup");
    };

    return { handleNavigation };
}
