import { Text, View,StyleSheet,Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Media } from '../types';
type MediaListItemProps = {
    media:Media
}

const MediaListItem = ({media}:MediaListItemProps)=> {
    return (
        <Link href={`${media.id}`} asChild>
            <Pressable style={stlyes.container}>
                <Image source={{uri:media.image}} style={stlyes.image}/>
                <Text style={stlyes.title} numberOfLines={1} ellipsizeMode="tail">{media.title} </Text>
                <Text style={stlyes.ratingText}>{media.rating}</Text>
            </Pressable>
        </Link>
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