import { Text, View } from "react-native";
import { IconTicket } from "@tabler/icons-react-native";
import { stylesSheet } from "./style";
import { colors } from "@/styles/theme"

type Props = {
    code: string
}

export function Coupon({ code }: Props) {
    return (
        <View style={stylesSheet.container}>
            <Text style={stylesSheet.title}>Utilize esse cupom</Text>
            <View style={stylesSheet.content}>
                <IconTicket size={24} color={colors.green.light} />
                <Text style={stylesSheet.code}>{code}</Text>
            </View>
        </View>
    )
}