import React, { useEffect } from 'react'
import { View,StyleSheet } from 'react-native'
import HomeScreenButton from '../components/HomeScreenButton'
import MediaList from '../components/MediaList'
import axios from 'axios';
import { useState } from 'react'
import MediaArray from '../../assets/data/dummy_data'
import { Media } from '../types'
import { urlParams,sectonType,initSection } from '../serviceFunctions';
const BASE_URL = "http://localhost:8080/api/media"
const GET_ALL_API_URl:urlParams = {url:BASE_URL};
const SCI_FI_URL:urlParams = {url:`${BASE_URL}/genre/SCI_FI`}
const HORROR_URL:urlParams = {url:`${BASE_URL}/genre/HORROR`}
const ACTION_URL:urlParams = {url:`${BASE_URL}/genre/ACTION`}
const ADVENTURE_URL:urlParams = {url:`${BASE_URL}/genre/ADVENTURE`}
const URLs:urlParams[] = [GET_ALL_API_URl,SCI_FI_URL,ACTION_URL,ADVENTURE_URL,HORROR_URL]

const SECTIONS:sectonType[] = [
    
        {
            title:'Top Rated',
            data:null,
    
        },
        {
            title: "Sci-Fi",
            data:MediaArray,
        },
        {
            title:"ACTION",
            data:MediaArray
        },
        {
            title : "ADVENTURE",
            data: MediaArray
        },
        {
            title:"HORROR",
            data:MediaArray
        }
]




const HomePage = ()=> {
    initSection(SECTIONS,URLs);
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