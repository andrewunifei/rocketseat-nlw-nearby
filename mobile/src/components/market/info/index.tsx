import { Text, View  } from "react-native";
import { IconProps } from "@tabler/icons-react-native"
import { stylesSheet } from "./styles";
import { colors } from "@/styles/theme"

type Props = {
    description: string
    icon: React.ComponentType<IconProps>
}

export function Info({ icon: Icon, description }: Props) {
    return (
        <View style={stylesSheet.container}>
            <Icon size={16} color={colors.gray[400]} />
            <Text style={stylesSheet.text}>{description}</Text>
        </View>
    )
}