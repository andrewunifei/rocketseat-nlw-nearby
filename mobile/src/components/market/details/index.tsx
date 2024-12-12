import { View, Text } from "react-native";
import { IconPhone, IconMapPin, IconTicket } from "@tabler/icons-react-native"
import { stylesSheet } from "./styles";
import { Info } from "../info";

export type PropsDetails = {
    name: string
    description: string
    address: string
    phone: string
    coupons: number
    rules: {
        id: string,
        description: string
    }[]
}

type Props = {
    data: PropsDetails
}

export function Details({data}: Props) {
    return (
        <View style={stylesSheet.container}>
            <Text style={stylesSheet.name}>{data.name}</Text>
            <Text style={stylesSheet.description}>{data.description}</Text>
            <View style={stylesSheet.group}>
                <Text style={stylesSheet.title}>Informações</Text>
                <Info icon={IconTicket} description={`${data.coupons} cupons disponíveis`} />
                <Info icon={IconMapPin} description={data.address} />
                <Info icon={IconPhone} description={data.phone} />
            </View>
            <View style={stylesSheet.group}>
                <Text style={stylesSheet.title}>Regulamento</Text>
                { data.rules.map((item) => (
                    <Text key={item.id} style={stylesSheet.rule}>
                        {`\u2022 ${item.description}`}
                    </Text>
                ))}
            </View>
        </View>
    )
}