import React from 'react'
import { View,StyleSheet } from 'react-native'
import HomeScreenButton from '../components/HomeScreenButton'
import MediaList from '../components/MediaList'
import SECTIONS from '../../assets/data/sections'

const HomePage = ()=> {
    return (
        <View style={styles.container}>
            <HomeScreenButton></HomeScreenButton>
            <MediaList sectionProp={SECTIONS} screenProp={"MediaDetails"} ></MediaList>
        </View>
    
    )
}



const styles = StyleSheet.create({
    container : {
        flex:2,
        backgroundColor:"grey"
    },

})
export default HomePage;