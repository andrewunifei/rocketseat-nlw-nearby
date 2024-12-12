import { ImageBackground, View } from "react-native";
import { IconArrowLeft } from "@tabler/icons-react-native";
import { router } from "expo-router";
import { stylesSheet } from "./styles";
import { Button } from "@/components/button";

type Props = {
    uri: string
}

export function Cover({ uri }: Props) {
    return (
        <ImageBackground source={{uri}} style={stylesSheet.container}>
            <View style={stylesSheet.header}>
                <Button style={{width: 40, height:40}} onPress={() => router.back()}>
                    <Button.Icon icon={IconArrowLeft} />
                </Button>
            </View>
        </ImageBackground>
    )
}