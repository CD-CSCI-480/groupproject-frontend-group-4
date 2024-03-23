import { View,StyleSheet,Text,Pressable } from "react-native";
import { useState } from "react";
const mediaTypes = ["Movies","Tv Shows","Books"];
const HomeScreenButton = () => {
    const [selectedType,setSelectedType] = useState("Movies")

    return (
        <View style={styles.container}>
            {mediaTypes.map((mediaType)=>(
            <View
             key={mediaType} style={[styles.sizes,{backgroundColor: selectedType==mediaType?"#EE731B":"#2F2F2F"}]}>
                <Text style={styles.size}>
                    {mediaType}
                </Text>
            </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin:20,
        flexDirection:"row",
        justifyContent:"space-evenly"
        
    },

    sizes: {
        backgroundColor:"#2F2F2F",
        borderRadius: 10,
        aspectRatio:3,
        alignItems:"center",
        justifyContent: "center",
        paddingLeft:10,
        paddingRight:10,

        

    },
    size: {
        color:"white",
        fontSize:18,
        fontWeight:"bold",
    
    }


})
export default HomeScreenButton;



