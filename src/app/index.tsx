import React from 'react'
import { View,StyleSheet,FlatList,Text } from 'react-native'
import MediaArray from '../../assets/data/dummy_data'
import HomeScreenButton from '../components/HomeScreenButton'
import MediaListItem from '../components/MediaListItem'

const HomePage = ()=> {
    return (
        <View style={styles.container}>
            <HomeScreenButton></HomeScreenButton>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Top Rated</Text>
            </View>
            <FlatList
                data={MediaArray}
                renderItem = {({item})=><MediaListItem media={item} ></MediaListItem>}
                horizontal
                />
        </View>
    
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:"grey"
    },

    headerText : {
        color:"white",
        fontSize:30,
        fontWeight:"bold",
    
    },
    headerContainer : {
        margin:20,

    }

    

})





export default HomePage;