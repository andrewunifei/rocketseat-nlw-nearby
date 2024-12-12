import { View, Text, Alert } from "react-native"
import { router, useLocalSearchParams } from "expo-router"
import { api } from "@/services/api"

export default function Market() {
    const params = useLocalSearchParams<{id: string}>()

    async function fetchMarket() {
        try {
            const { data } = await api.get("/markets/" + params.id)
            
        } catch (error) {
            console.log(error)
            Alert.alert("Error", "Não foi possível carregar os dados.", [
                { text: "Ok", onPress: () => router.back() },
            ])
        }
    }

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>{params.id}</Text>
        </View>
    )
}