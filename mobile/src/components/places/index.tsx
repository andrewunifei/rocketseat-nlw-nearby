import { useRef } from "react";
import { router } from "expo-router";
import { Text, useWindowDimensions } from "react-native";
import BottomSheet, { BottomSheetFlatList} from "@gorhom/bottom-sheet";
import { Place, PlaceProps } from "../place";
import { stylesSheet } from "./styles";

type Props = {
    data: PlaceProps[]
}

export function Places({ data }: Props) {
    const dimensions = useWindowDimensions()
    const bottomSheetRef = useRef<BottomSheet>(null)
    const snapPoints = {
        min: 270,
        max: dimensions.height - 120
    }

    return (
        <BottomSheet 
            ref={bottomSheetRef}
            snapPoints={[snapPoints.min, snapPoints.max]}
            handleIndicatorStyle={stylesSheet.indicator}
            backgroundStyle={stylesSheet.container}
            enableOverDrag={false}
        >
            <BottomSheetFlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Place data={item} onPress={() => router.navigate(`/market/${item.id}`)} />
                )}
                contentContainerStyle={stylesSheet.content}
                ListHeaderComponent={() => (
                    <Text style={stylesSheet.title}>Explore locais perto de você</Text>
                )}
                showsVerticalScrollIndicator={false}
            />
        </BottomSheet>
    )
}