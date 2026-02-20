import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, TextInput, View } from "react-native";

const SearchBarComponent = () => {
    return (
        <View style={style.container}>
            <TextInput placeholder="Search news..." style={style.input} />
            <MaterialIcons name="search" size={24} color="gray" style={style.icon} />
        </View>
    )
}

export default SearchBarComponent;

const style = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        borderRadius: 8, 
        backgroundColor: 'lightgray'
    },
    input : {
        flex: 1, 
        paddingLeft: 10
    },
    icon: {
        marginRight: 10
    }
})