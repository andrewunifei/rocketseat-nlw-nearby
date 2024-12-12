import { 
    TouchableOpacity,
    TouchableOpacityProps,
    View,
    Image,
    Text
} from "react-native";
import { stylesSheet } from "./styles";
import { IconTicket } from "@tabler/icons-react-native";
import { colors } from "@/styles/theme";

export type PlaceProps = {
    id: string,
    name: string,
    description: string,
    coupons: number,
    cover: string,
    address: string
}

type Props = TouchableOpacityProps & {
    data: PlaceProps
}

export function Place({ data, ...rest }: Props) {
    return (
        <TouchableOpacity style={stylesSheet.container} {...rest}>
            <Image style={stylesSheet.image} source={{uri: data.cover}}/>
            <View style={stylesSheet.content}>
                <Text style={stylesSheet.name}>{data.name}</Text>
                <Text style={stylesSheet.description} numberOfLines={2}>
                    {data.description}
                </Text>
                <View style={stylesSheet.footer}>
                    <IconTicket size={16} color={colors.red.base}></IconTicket>
                    <Text style={stylesSheet.tickets}>{data.coupons} cupons disponíveis</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}