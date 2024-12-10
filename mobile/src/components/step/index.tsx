import { Text, View } from "react-native"
import { stylesSheet } from "./style"
import { IconProps } from "@tabler/icons-react-native"
import { colors } from "@/styles/theme"

type Props = {
    title: string,
    description: string,
    icon: React.ComponentType<IconProps>
}

export function Step({ title, description, icon: Icon }: Props) {
    return (
        <View style={stylesSheet.container}>
            {Icon && <Icon size={32} color={colors.red.base} />}
            <View style={stylesSheet.details}>
                <Text style={stylesSheet.title}>{title}</Text>
                <Text style={stylesSheet.description}>{description}</Text>
            </View>
        </View>
    )
}