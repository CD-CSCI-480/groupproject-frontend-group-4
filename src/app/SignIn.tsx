import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert,TouchableOpacity, Pressable } from 'react-native';
import SubmitButton from '../components/SubmitButton';
import { useUser } from '../components/UserProvider';
const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useUser();
    
    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const userDTO = await response.json();
                setUser(userDTO)
                Alert.alert("Login Success", "You are logged in!");
                navigation.navigate("AppNavigator",{screen:"HomeStack"})
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
                placeholder="Password"
                placeholderTextColor={"white"}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            
            <SubmitButton onPress={handleLogin} text={"Login"}></SubmitButton>
            <SubmitButton onPress={()=>navigation.navigate("SignUp")} text={"Create an Account"}></SubmitButton>

        </View>
    );
};

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
        borderColor: "#EE731B",
        borderRadius: 5,
        backgroundColor:"#2F2F2F",
        color:"white"
    },
    textStyle:{
      color:"white",fontWeight:"bold",fontSize:18
    }
});

export default Login;




