import { View,StyleSheet,FlatList,Text,SectionList } from 'react-native'
import MediaListItem from '../components/MediaListItem'
import SECTIONS from '../../assets/data/sections'

const MediaList = ()=> {
    return (
    <SectionList
            sections = {SECTIONS}
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
                return null;
            }}
            />
    )
}

const styles = StyleSheet.create({
    headerText : {
        color:"white",
        fontSize:30,
        fontWeight:"bold",
        margin:10
    },
})

export default MediaList