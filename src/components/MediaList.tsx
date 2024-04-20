import { View,StyleSheet,FlatList,Text,SectionList } from 'react-native'
import MediaListItem from './MediaListItem'
import SECTIONS from '../../assets/data/sections'

const MediaList = ({sectionProp,screenProp})=> {
    return (
    <SectionList
            sections = {sectionProp}
            renderSectionHeader= {
                ({section}) => (
                    <>
                        <Text style={styles.headerText}>{section.title}  </Text>
                        <FlatList
                            data={section.data}
                            renderItem = {({item})=><MediaListItem media={item} screenProp={screenProp} ></MediaListItem>}
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