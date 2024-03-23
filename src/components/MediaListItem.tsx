import { Text, View,StyleSheet,Image } from 'react-native';
import MediaArray from '../../assets/data/dummy_data'

const media = MediaArray[0];
const MediaListItem = ()=> {
    return (
        <View style={stlyes.container}>
            <Image source={{uri:media.image}} style={stlyes.image}/>
            <Text style={stlyes.title}>{media.title}</Text>
        </View>
    )
}

const stlyes = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'grey',
        alignItems:'center',
        

    },
    image: {
        width:100,
        height:200,
        borderRadius: 4,
    },
    title : {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 10,
        color:"white"
        

    }
 })
export default MediaListItem