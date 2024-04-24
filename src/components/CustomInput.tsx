import { TextInput,StyleSheet } from "react-native";

function CustomInput({placeholder,value,keyboardType,onChangeText,}) {
  return (
    <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={"white"}
            value={value}
            onChangeText={onChangeText}
            autoCapitalize="none"
            keyboardType={keyboardType}
            />
    
  )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        marginVertical: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        backgroundColor:"#2F2F2F",
        color:"white"
    },

})



export default CustomInput

