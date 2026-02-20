import CardComponent from "@/components/cardComponent";
import SearchBarComponent from "@/components/searchBar";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    // const renderScene = SceneMap({
    //     first: FirstRoute,
    //     second: SecondRoute,
    // });

    const routes = [
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ];
    return (
        <SafeAreaView style={{ marginHorizontal: 16, flex: 1 }}>
            <SearchBarComponent />
            <Text style={styles.title}>Breaking News</Text>
            <CardComponent />

        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10
    }
})