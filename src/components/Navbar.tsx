import React from 'react';
import { View, Button } from 'react-native';

const NavBar: React.FC = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <Button
        title="Home"
        onPress={() => {
          console.log('Home button pressed');
        }}
      />
      <Button
        title="Search"
        onPress={() => {
          console.log('Search button pressed');
        }}
      />
      <Button
        title="Profile"
        onPress={() => {
          console.log('Profile button pressed');
        }}
      />
    </View>
  );
};

export default NavBar;
