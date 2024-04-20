import { useNavigation } from '@react-navigation/native';
import { Text,StyleSheet,Image, Pressable,} from 'react-native';
import { Media } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
type MediaListItemProps = {
    media:Media
}
type RootStackParamList = {
    MediaDetails: { selectedMedia: Media };
    // Add other screens here
   };

const MediaListItem = ({media,screenProp}) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
            <Pressable style={stlyes.container} onPress={()=>navigation.navigate(screenProp,{selectedMedia:media})}>
                <Image source={{uri:media.image}} style={stlyes.image}/>
                <Text style={stlyes.title} numberOfLines={1} ellipsizeMode="tail">{media.title} </Text>
                <Text style={stlyes.ratingText}>{media.rating}</Text>
            </Pressable>
        
        
    )
}

const stlyes = StyleSheet.create({
    container: {
        alignItems:'center',
        
    },
    image: {
        width:115,
        aspectRatio: 137/220,
        borderRadius: 20,
        
    },
    title : {
        fontSize: 12,
        fontWeight: 'bold',
        marginVertical: 10,
        color:"white",
        flex:1,
        width:100
    },
    ratingText :{
        alignItems:"center",
        color:"white",
        fontWeight:"bold"


    }
 })
export default MediaListItem