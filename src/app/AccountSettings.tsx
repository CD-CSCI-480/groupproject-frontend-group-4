import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';
import { useNavigation } from 'expo-router';


const AccountSettingsScreen: React.FC = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle" size={30} color="black" />
        </TouchableOpacity>
          <MaterialCommunityIcons name="account-circle" size={50} color="black" />
          <MaterialCommunityIcons name="cogs" size={50} color="black" />
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons name="email" size={30} color="black" />
            <Text style={styles.text}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons name="shield" size={30} color="black" />
            <Text style={styles.text}>Security and Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons name="lock" size={30} color="black" />
            <Text style={styles.text}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons name="tools" size={30} color="black" />
            <Text style={styles.text}>Accessibility</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons name="card-account-details" size={30} color="black" />
            <Text style={styles.text}>Personal Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons name="delete" size={30} color="black" />
            <Text style={styles.text}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    settings: {
      width: '80%',
    },
    box: {
      flex: 1,
      backgroundColor: '#2F2F2F',
      borderRadius: 10,
      margin: 10,
      padding: 10,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    text: {
      marginLeft: 10,
      fontSize: 18,
    },
  });

  export default AccountSettingsScreen;
  
    