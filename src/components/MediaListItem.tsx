import { useNavigation } from '@react-navigation/native';
import { Text,StyleSheet,Image, Pressable,} from 'react-native';
import { Media } from '../types';

type MediaListItemProps = {
    media:Media
}

const MediaListItem = ({media}:MediaListItemProps) => {
    const navigation =useNavigation()
    return (
            <Pressable style={stlyes.container} onPress={()=>navigation.navigate("MediaDetails",{selectedMedia:media})}>
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