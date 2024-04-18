import { View,Text } from "react-native/";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Media } from "../types";
type MediaDetailsScreenParams = {
    media: Media; // Assuming Media is a valid type for the item
  };
  type MediaDetailsScreenProps = NativeStackScreenProps<MediaDetailsScreenParams,"media"
>;

const MediaDetailsScreen = ({route}:MediaDetailsScreenProps)=> {
    const item = route.params;
    return(
        <View>
            <Text>
                details screen for id:{item.id} 
            </Text>
        </View>
    )
}

export default MediaDetailsScreen;