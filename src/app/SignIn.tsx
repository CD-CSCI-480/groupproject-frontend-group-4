import * as React from 'react'
import { View,Text,Pressable,StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { NavigationContainer } from '@react-navigation/native'

export default function SignIn() {
  return (
    
    <View style={styles.buttonContainer}>
      <Link href={"home"} asChild>
        <Pressable 
        style={styles.signInButton}
        >
            <Text style={styles.textColor}>
              Enter App
            </Text>
        </Pressable>
      </Link>
    </View>
  )
  }


const styles = StyleSheet.create({
  buttonContainer : {
    flex:1,
    backgroundColor:"grey",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
    
    

  },
  signInButton: {
    backgroundColor:"#2f2f2f",
    borderRadius:20,
    width:100,
    height:50,
    justifyContent:"center",
    alignItems:"center"
    
    
  },

  textColor: {
    color:"white",
    fontWeight:"bold",
    fontSize:18,
  },

})



