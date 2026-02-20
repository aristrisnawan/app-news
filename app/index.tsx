import AppText from "@/components/app-text";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LandingPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 90 }}>
                <AppText style={styles.textTitle}>Latest Article</AppText>
                <Text style={styles.textTitle}>With <Text style={styles.textBetter}>better</Text> news</Text>
                <AppText style={styles.textDescription}>
                    Browse the best news on latest
                    strategies, trends various tools and
                    news in the world
                </AppText>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() =>router.navigate('/home')}>
                    <Text style={styles.textButton}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default LandingPage;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        flex: 1
    },
    textTitle: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    textDescription: {
        fontSize: 16,
        marginTop: 20,
    },
    buttonContainer: {
        flex: 1, 
        justifyContent: 'flex-end', 
        marginBottom: 80
    },
    button: {
        backgroundColor: '#2F48FF', 
        borderRadius: 50
    },
    textButton: {
        color: 'white', 
        paddingVertical: 10, 
        textAlign: 'center', 
        fontSize: 16, 
        fontWeight: 'bold'
    },
    textBetter: {
        backgroundColor: '#2F48FF', 
        color: 'white'
    }
})