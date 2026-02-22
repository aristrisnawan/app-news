import CardComponent from "@/components/cardComponent";
import SearchBarComponent from "@/components/searchBar";
import { useState } from "react";
import { StyleSheet, Text, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabBar, TabView } from 'react-native-tab-view';
import AllNews from "./allNews";
import OtomotifNews from "./otomotifNews";

const Home = () => {
    const renderTabBar = (props: any) => (
        <TabBar
            {...props}
            style={{ backgroundColor: 'transparent', elevation: 0, shadowOpacity: 0 }}
            indicatorStyle={{ backgroundColor: 'transparent', height: 1 }}
            labelStyle={{ fontWeight: 'bold', fontSize: 14 }}
            tabStyle={{width: 'auto', paddingHorizontal: 0, marginRight: 10}}
            scrollEnabled={false}
            activeColor="blue"
            inactiveColor="gray"
            pressColor="#f0f0f0"
        />)

    const renderScene = ({ route }: any) => {
        const isFocused = routes[index].key === route.key;
        switch (route.key) {
            case 'all':
                return <AllNews isFocused={isFocused}/>;
            case 'otomotif':
                return <OtomotifNews />;
            case 'business':
                return <Text>Business News</Text>;
            default:
                return null;
        }
    };

    const routes = [
        { key: 'all', title: 'All' },
        { key: 'otomotif', title: 'Otomotif' },
        { key: 'business', title: 'Business' },
    ];

    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);

    return (
        <SafeAreaView style={{ marginHorizontal: 16, flex: 1 }}>
            <SearchBarComponent />
            <Text style={styles.title}>Breaking News</Text>
            <CardComponent />
            <TabView
                style={{ marginTop: 20, backgroundColor: 'transparent' }}
                navigationState={{ index, routes }}
                renderTabBar={renderTabBar}
                renderScene={renderScene}
                onIndexChange={setIndex}
                animationEnabled={true}
                initialLayout={{ width: layout.width }}
            />
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