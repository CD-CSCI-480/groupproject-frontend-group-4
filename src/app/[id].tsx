import { View,Text } from "react-native/";
import { useLocalSearchParams } from "expo-router";

const MediaDetailsScreen = ()=> {
    const {id} =  useLocalSearchParams();
    return(
        <Text>
            details screen for id: {id}
        </Text>
    )
}

export default MediaDetailsScreen;