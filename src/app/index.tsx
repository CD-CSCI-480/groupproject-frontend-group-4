import React from 'react'
import { View,StyleSheet } from 'react-native'
import HomeScreenButton from '../components/HomeScreenButton'
import MediaListItem from '../components/MediaListItem'

const HomePage = ()=> {
    return (
        <View style={styles.container}>
            <HomeScreenButton></HomeScreenButton>
            <MediaListItem></MediaListItem>
        </View>
    
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:"grey"
    }

})





export default HomePage;