import { View,Text,Image,StyleSheet,Modal,Pressable } from "react-native/";
import SubmitButton from "../components/SubmitButton";
import AddRating from "../components/addRating";

import { useState } from "react";
const MediaDetailsScreen = ({route})=> {
    const item = route.params.selectedMedia;
    const [modalVisible,setModalVisible] = useState(false);
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image source={{uri:item.image}} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}> {item.title}</Text>
                <Text style={styles.text}> {item.rating}</Text>
                <Text style={styles.text}> {item.genre}</Text>
                <Text style={styles.text}> {item.type}</Text>
                <SubmitButton
            text={"rate"}
            onPress={()=>setModalVisible(true)}
            ></SubmitButton>
            <AddRating
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            mediaId={item.id}
            ></AddRating>
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
        justifyContent:"center"
        
    },
    text:{
        fontSize:18,
        fontWeight:"bold",
        color:"white",
        
    },
    modalView: {
        margin: 20,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        justifyContent:"center",        
        
      },
})

export default MediaDetailsScreen;