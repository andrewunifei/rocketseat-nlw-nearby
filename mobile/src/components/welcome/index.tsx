import { Image, Text, View } from "react-native"
import { stylesSheet } from "./styles"

export function Welcome() {
    return (
        <View>
            <Image source={require("@/assets/logo.png")} style={stylesSheet.logo} /> 
            <Text style={stylesSheet.title}>Boas vindas ao Nearby!</Text>
            <Text style={stylesSheet.subTitle}>
                Tenha cupons de vantagem para usar em seus estabelecimentos favoritos.
            </Text>
        </View>
    )
}