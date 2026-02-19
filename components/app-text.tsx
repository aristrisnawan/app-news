import { StyleSheet, Text } from "react-native";

const AppText = (props: any) => {
    return (
        <Text {...props} style={[styles.defaultStyle, props.style]}>
            {props.children}
        </Text>
    )
}

export default AppText;

const styles = StyleSheet.create({
    defaultStyle: {
        fontFamily: 'Poppins-Regular',
    }
})