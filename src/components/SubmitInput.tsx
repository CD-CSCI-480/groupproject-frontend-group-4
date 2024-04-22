import React from 'react';
import { Pressable,Text,StyleSheet } from 'react-native';

function SubmitButton({onPress,text}) {
  return (
    <Pressable style={{padding:10}} onPress={onPress}>
              <Text style={styles.textStyle}>{text}</Text>
            </Pressable>
  )
}

const styles = StyleSheet.create({

    textStyle:{
        color:"#2F2F2F",fontWeight:"bold",fontSize:18
      }
})

export default SubmitButton
