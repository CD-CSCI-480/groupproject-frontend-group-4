import React from 'react'
import { View,StyleSheet,Text } from 'react-native'
import HomeScreenButton from '../components/HomeScreenButton'
import MediaList from '../components/MediaList'
import NavBar from '../components/Navbar'

const HomePage = ()=> {
    return (
        <View style={styles.container}>
            <HomeScreenButton></HomeScreenButton>
            <MediaList></MediaList>
            <NavBar>
                
            </NavBar>

            
        </View>
    
    )
}




const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:"grey"
    },

})
export default HomePage;