import { View,Text,Image,StyleSheet } from "react-native/";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Media } from "../types";


const MediaDetailsScreen = ({route})=> {
    const item = route.params.selectedMedia;
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image source={{uri:item.image}} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}> {item.title}</Text>
                <Text style={styles.text}> {item.rating}</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"grey",
        
    },
    imageContainer: {
        
        alignItems:"center",
        paddingTop:30

    },
    image: {
        width:200,
        aspectRatio: 137/220,
        borderRadius: 20,
        
        
    },

    textContainer: {
        flex:1,
        alignItems:"center",
        
    },
    text:{
        fontSize:18,
        fontWeight:"bold",
        color:"white",
        
    }
})

export default MediaDetailsScreen;