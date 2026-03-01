import ButtomSheet from "@/components/buttomSheetComponent";
import CardComponent from "@/components/cardComponent";
import SearchBarComponent from "@/components/searchBar";
import Api from "@/services/api";
import { allNews } from "@/services/apiType";
import { useEffect, useState } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabBar, TabView } from 'react-native-tab-view';
import AllNews from "./allNews";
import OtomotifNews from "./otomotifNews";

const Home = () => {


    const [allNews, setAllNews] = useState<allNews | null>(null);
    const [otomotifNews, setOtomotifNews] = useState<allNews | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedArticle, setSelectedArticle] = useState<any>(null);

    useEffect(() => {
        const getAllNews = async () => {
            try {
                setLoading(true);
                const response = await Api.AllNews()
                const otomotifResponse = await Api.OtomotifNews()
                setAllNews(response)
                setOtomotifNews(otomotifResponse)
            } catch (error) {
                console.log("Gagal mengambil berita:", error)
            } finally {
                setLoading(false)
            }
        }
        getAllNews()
    }, [])
    const renderTabBar = (props: any) => (
        <TabBar
            {...props}
            style={{ backgroundColor: 'transparent', elevation: 0, shadowOpacity: 0 }}
            indicatorStyle={{ backgroundColor: 'transparent', height: 1 }}
            labelStyle={{ fontWeight: 'bold', fontSize: 14 }}
            tabStyle={{ width: 'auto', paddingHorizontal: 0, marginRight: 10 }}
            scrollEnabled={false}
            activeColor="blue"
            inactiveColor="gray"
            pressColor="#f0f0f0"
        />)

    const renderScene = ({ route }: any) => {
        const isFocused = routes[index].key === route.key;
        switch (route.key) {
            case 'all':
                return <AllNews isFocused={isFocused} data={allNews} onPressItem={(item) => {
                    setSelectedArticle(item);
                    setIsOpen(true);
                }} />;
            case 'otomotif':
                return <OtomotifNews data={otomotifNews} isFocused={isFocused} onPressItem={(item) => {
                    setSelectedArticle(item);
                    setIsOpen(true);
                }} />;
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
    const [isOpen, setIsOpen] = useState(false);

    return (
        <View style={{ flex: 1 }}>
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
            <ButtomSheet
                visible={isOpen}
                onClose={() => setIsOpen(false)}
                article={selectedArticle}
            />
        </View>
        // </SafeAreaView>
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