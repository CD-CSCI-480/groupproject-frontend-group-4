import NavBar from '../components/Navbar'
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const ProfilePage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle" size={24} color="black" />
        </TouchableOpacity>
        <Image source={{ uri: 'https://your-user-photo-url' }} style={styles.profileImage} />
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <MaterialIcons name="settings" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.creationDate}>Account created on: {new Date().toLocaleDateString()}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
        <Text style={styles.editProfile}>Edit Profile</Text>
      </TouchableOpacity>
      <ScrollView horizontal={true} style={styles.row}>
        <Text style={styles.rowTitle}>My Favorites</Text>
        {}
      </ScrollView>
      <ScrollView horizontal={true} style={styles.row}>
        <Text style={styles.rowTitle}>My List</Text>
        {}
      </ScrollView>
      <ScrollView horizontal={true} style={styles.row}>
        <Text style={styles.rowTitle}>Recently Viewed</Text>
        {}
      </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  creationDate: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
  editProfile: {
    fontSize: 14,
    color: '#00f',
    textAlign: 'center',
    marginBottom: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  rowTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProfilePage;
