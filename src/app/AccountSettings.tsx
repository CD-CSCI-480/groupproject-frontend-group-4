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
        </View>
        <View style={styles.settingsIcon}>
        <MaterialCommunityIcons name="cogs" size={70} color="black"/>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons name="email" size={30} color="white"/>
            <Text style={styles.text}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons name="shield" size={30} color="white" />
            <Text style={styles.text}>Security and Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons name="lock" size={30} color="white" />
            <Text style={styles.text}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons name="tools" size={30} color="white" />
            <Text style={styles.text}>Accessibility</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons name="card-account-details" size={30} color="white" />
            <Text style={styles.text}>Personal Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons name="delete" size={30} color="white" />
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
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 25,
    },
    settings: {
      width: '80%',
    },
    settingsIcon: {
      alignSelf: 'center',
    },
    box: {
      flex: 1,
      backgroundColor: '#2F2F2F',
      borderRadius: 25,
      margin: 10,
      padding: 25,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 10,
      borderBottomColor: '#2F2F2F',
    },
    text: {
      marginLeft: 10,
      fontSize: 18,
      color: 'white'
    },
  });

  export default AccountSettingsScreen;
  
    