import { useRouter } from "expo-router";


export default function useNavToContribute() {
    const router = useRouter();

    const handleContribute = () => {
        router.push("/OtherScreens/ContributionScreen");
    };

    return { handleContribute };
}