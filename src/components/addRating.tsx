import { Modal,View,StyleSheet,Text,SafeAreaView ,Pressable,TextInput} from "react-native";
import React,{useState} from 'react'
import SubmitButton from "./SubmitButton";
import { useUser } from "./UserProvider";
import axios from "axios";


function AddRating({modalVisible,setModalVisible,mediaId,}) {
    const [rating,setRating] = useState('');
    const {user} = useUser();
    console.log(user);
    const rate = async(mediaId,value) => {
      
      try{
        const response = await axios.put(`http://localhost:8080/api/users/${user.id}/rate/${mediaId}/${value}`);
        if (response.status ===200) {
          console.log("success");
          alert("Rating Added");
          setModalVisible(false);
        }
      } catch (error) {
        console.error("error",error);
      }
      
    }
    

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
                placeholder="Add rating"
                placeholderTextColor={"white"}
                value={rating}
                onChangeText={setRating}
                autoCapitalize="none"
                keyboardType="decimal-pad"
                />
                    <SubmitButton
                    onPress={()=>rate(mediaId,rating)}
                    text="Add a Rating"
                    ></SubmitButton>
                    
                    <SubmitButton
                    onPress={()=>setModalVisible(false)}
                    text="Close"
                    ></SubmitButton>
                       
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
        width: '30%',
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
