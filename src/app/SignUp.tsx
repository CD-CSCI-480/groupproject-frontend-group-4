import React from 'react'
import { StyleSheet,TextInput,View,TouchableOpacity,Text,Alert,Button} from 'react-native'
import { useState } from 'react';
import SubmitButton from '../components/SubmitButton';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLasttName] = useState('');

    
    
    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password,firstName,lastName})
            });

            if (response.ok) {
                const userDTO = await response.json();
                Alert.alert("You successfully created an account");
                
                // Handle navigation or state update as needed
            } else {
                const errorMsg = await response.text();
                Alert.alert("Login Failed", errorMsg);
            }
        } catch (error) {
            console.error('Login Error:', error);
            Alert.alert("Network Error", "An error occurred while trying to log in.");
        }
    };
  return (
    

    <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={"white"}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="FirstName"
                placeholderTextColor={"white"}
                value={firstName}
                onChangeText={setFirstName}
                autoCapitalize="none"
                
            />
            <TextInput
                style={styles.input}
                placeholder="LastName"
                placeholderTextColor={"white"}
                value={lastName}
                onChangeText={setLasttName}
                autoCapitalize="none"
                
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={"white"}
                value={password}
                onChangeText={setPassword}
            />
            <SubmitButton onPress={handleLogin} text={"Create"}></SubmitButton>


        </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor:"grey"
    },
    input: {
        width: '100%',
        marginVertical: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        backgroundColor:"#2F2F2F",
        color:"white"
    },
});

export default SignUp
