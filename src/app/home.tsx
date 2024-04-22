import React, { useEffect } from 'react'
import { View,StyleSheet } from 'react-native'
import HomeScreenButton from '../components/HomeScreenButton'
import MediaList from '../components/MediaList'
import SECTIONS from '../../assets/data/sections'
import axios from 'axios';
import { useState } from 'react'
import MediaArray from '../../assets/data/dummy_data'
const sections = [
    
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
    const [media,setMedia] = useState([]);
    useEffect(()=>{
        const fetchItems =async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/media")
                setMedia(response.data);
            } catch (error) {
                console.error("Error getting data",error);
            }
    };
    fetchItems();
},[]);

    sections[0].data = media;

    return (
        <View style={styles.container}>
            <HomeScreenButton></HomeScreenButton>
            <MediaList sectionProp={sections} screenProp={"MediaDetails"} ></MediaList>
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