import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import MediaList from '../components/MediaList';
import MediaArray from '../../assets/data/dummy_data';
const sections= [
  {
    title:'My favorites',
    data:MediaArray
  },
  {
    title:'My List',
    data:MediaArray
  },
  {
    title:"Recently Viewed",
    data:MediaArray
  },



]
const ProfilePage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
        <Image source={{ uri: 'https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png' }} style={styles.profileImage} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('AccountSettings',)}>
          <MaterialIcons name="settings" size={30} color="black" />
        </TouchableOpacity>
      </View>    
      <MediaList sectionProp={sections} screenProp="MediaDetails"></MediaList>
    </View>
  );
};



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
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 25,
  },
  profileImageContainer: {
    flex:1,
    alignItems:"center",
    justifyContent: 'center',
    paddingLeft:30
  },
  creationDate: {
    fontSize: 12,
    color: 'orange',
    textAlign: 'center',
  },
  editProfile: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
  },
  box: {
    flex: 1,
    backgroundColor: '#2F2F2F',
    borderRadius: 25,
    margin: 10,
    padding: 10,
  },
  rowTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProfilePage; 


