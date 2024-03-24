import React from 'react'
import { View,StyleSheet,FlatList,Text,SectionList } from 'react-native'
import MediaArray from '../../assets/data/dummy_data'
import HomeScreenButton from '../components/HomeScreenButton'
import MediaListItem from '../components/MediaListItem'
import SECTIONS from '../../assets/data/sections'


const HomePage = ()=> {
    return (
        <View style={styles.container}>
            <HomeScreenButton></HomeScreenButton>
            <SectionList
            sections = {SECTIONS}
            style={styles.headerContainer}
            

            renderSectionHeader= {
                ({section}) => (
                    <>
                        <Text style={styles.headerText}>{section.title}  </Text>
                        <FlatList
                            data={section.data}
                            renderItem = {({item})=><MediaListItem media={item} ></MediaListItem>}
                            horizontal
                            contentContainerStyle={{gap:30}}
                        />
                    </>
                   
                )
            }
            renderItem= {({item,section})=>{
            }}
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