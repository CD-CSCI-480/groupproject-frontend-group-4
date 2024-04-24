import React from 'react';
import { Pressable,Text,StyleSheet } from 'react-native';

function SubmitButton({onPress,text}) {
  return (
    <Pressable style={styles.buttonStyles} onPress={onPress}>
              <Text style={styles.textStyle}>{text}</Text>
            </Pressable>
  )
}

const styles = StyleSheet.create({

    textStyle:{
        color:"white",fontWeight:"bold",fontSize:18
      },
      buttonStyles:{
        padding:10,
        backgroundColor:"#2F2F2F",
        borderRadius:10
      },
      
})

export default SubmitButton
