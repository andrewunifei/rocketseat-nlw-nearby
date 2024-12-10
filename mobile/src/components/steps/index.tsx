import { View, Text } from "react-native"
import { stylesSheet } from "./styles"
import { Step } from "../step"
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native"

export function Steps() {
    return (
        <View style={stylesSheet.container}>
            <Text style={stylesSheet.title}>Veja como funciona:</Text>
            <Step 
                title="Encontre estabeecimentos"
                description="Veja locais perto de você que são parceiros Nearby"
                icon={IconMapPin} />
            <Step 
                title="Ativo o cupom com QR Code"
                description="Escaneie o código no estabelecimento para usar o benefício"
                icon={IconQrcode} />
            <Step 
                title="Garante vatangens perto de você"
                description="Ative cupons onde estiver, em diferentes tipos de estabelecimento"
                icon={IconTicket} />
        </View>
    )
}