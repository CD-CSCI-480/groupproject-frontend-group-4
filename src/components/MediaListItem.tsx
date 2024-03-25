import { Text, View,StyleSheet,Image } from 'react-native';
import { Media } from '../types';
type MediaListItemProps = {
    media:Media
}

const MediaListItem = ({media}:MediaListItemProps)=> {
    return (
        <View style={stlyes.container}>
            <Image source={{uri:media.image}} style={stlyes.image}/>
            <Text style={stlyes.title} numberOfLines={1} ellipsizeMode="tail">{media.title} </Text>
            <Text style={stlyes.ratingText}>{media.rating}</Text>
        </View>
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