import { Modal,View,StyleSheet,Text,SafeAreaView ,Pressable,TextInput} from "react-native";
import React,{useState} from 'react'

function AddRating({modalVisible,setModalVisible}) {
    const [rating,setRating] = useState('');
  return (
    <View
                style={styles.modalView}>
                <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={()=>setModalVisible(false)}
                style={styles.modalView}
                presentationStyle="formSheet"
                >
                    <View style={{alignItems:"center",justifyContent:"center",flex:1,backgroundColor:"grey"}}>
                    <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={"white"}
                value={rating}
                onChangeText={setRating}
                autoCapitalize="none"
                keyboardType="email-address"
            />
                        <Text style={{color:"black"}}>Rate me</Text>
                        <Pressable onPress={()=>setModalVisible(false)}>
                        <Text>
                            Close 
                        </Text>
                    </Pressable>
                    </View>
                    
                </Modal>
            </View>
  )
}
    
  

const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        justifyContent:"center",        
        
      },
      input: {
        width: '100%',
        marginVertical: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: "#EE731B",
        borderRadius: 5,
        backgroundColor:"#2F2F2F",
        color:"white"
    },
   

})
export default AddRating;
