import { Text, Pressable, PressableProps } from "react-native";
import { stylesSheet } from "./style";
import { categoriesIcons } from "@/utils/categories-icons";
import { colors } from "@/styles/theme";

type Props = PressableProps & {
    name: string
    iconId: string
    isSelected?: boolean
}

export function Category({name, iconId, isSelected = false, ...rest}: Props) {
    const Icon = categoriesIcons[iconId]

    return (
        <Pressable 
            style={[stylesSheet.container, isSelected && stylesSheet.containerSelected]}
            {...rest}
        >
            <Icon size={16} color={colors.gray[isSelected ? 100 : 400]}  />
            <Text style={[stylesSheet.name, isSelected && stylesSheet.nameSelected]}>{name}</Text>
        </Pressable>
    )
}