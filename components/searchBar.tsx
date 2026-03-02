import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableWithoutFeedback, View } from "react-native";

interface Props {
    searchQuery: string,
    onChangeText: (text: string) => void
}
const SearchBarComponent = ({ searchQuery, onChangeText }: Props) => {
    return (
        <View style={style.container}>
            <View style={{ flex: 1 }}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <TextInput
                            value={searchQuery}
                            onChangeText={onChangeText}
                            placeholder="Search news..."
                            style={style.input} />
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </View>
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
    input: {
        // flex: 1,
        paddingLeft: 10
    },
    icon: {
        marginRight: 10
    }
})