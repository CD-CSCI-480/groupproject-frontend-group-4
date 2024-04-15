import React, { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, Text } from 'react-native';
import NavBar from '../components/Navbar';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const data = [
    'Spider Man',
    'Shawshank',
    'The Godfather',
    'Iron Man',
    'Captain America',
    'Demon Slayer',
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filteredData = data.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredData);
    } else {
      setResults([]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <NavBar></NavBar>
    </View>
  );
}

const styles = StyleSheet.create ({
  container : {
    flex:2,
    backgroundColor:"grey"
},
  searchBar: {
    borderWidth: 1,
    color: 'grey',
    padding: 10,
    backgroundColor:'white',
    borderRadius: 5,
    marginBottom: 20,
    width: '80%',
  },
    navBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 50,
      backgroundColor: '##2F2F2F',
      borderColor: 'grey',
      borderWidth: 1,
      borderRadius: 10,
      margin: 20,
      padding: 10,
    },
  });

export default SearchBar;