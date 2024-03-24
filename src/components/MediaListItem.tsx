import { Text, View,StyleSheet,Image } from 'react-native';
import { Media } from '../types';
type MediaListItemProps = {
    media:Media
}

const MediaListItem = ({media}:MediaListItemProps)=> {
    return (
        <View style={stlyes.container}>
            <Image source={{uri:media.image}} style={stlyes.image}/>
            <Text style={stlyes.title}>{media.title}</Text>
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
        fontWeight: '600',
        marginVertical: 10,
        color:"white"
        

    }
 })
export default MediaListItem