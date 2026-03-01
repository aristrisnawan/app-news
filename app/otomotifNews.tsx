import LoadingComponent from "@/components/loadingComponent";
import { allNews } from "@/services/apiType";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface dataArticle {
    data: allNews | null,
    isFocused?: boolean,
    onPressItem: (item: any) => void
}

const OtomotifNews = ({isFocused, data, onPressItem}: dataArticle) => {
     const [isLoading, setIsLoading] = useState(true);
    const [visibleData, setVisibleData] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const LIMIT = 5;

    useEffect(() => {
        if (isFocused) {
            setIsLoading(true);
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [isFocused]);


    useEffect(() => {
        if (data?.articles) {
            setVisibleData(data.articles.slice(0, LIMIT))
            setPage(1)
        }
    }, [data])

    if (isLoading) {
        return (
            <View style={{ flex: 1, paddingTop: 8 }}>
                {[1, 2, 3].map((key) => <LoadingComponent key={key} />)}
            </View>
        );
    }

    const loadMoreData = () => {
        const nextPage = page + 1;
        const newData = data?.articles.slice(0, nextPage * LIMIT) || [];

        if (newData && newData.length > visibleData.length) {
            setVisibleData(newData);
            setPage(nextPage);
        }
    }



    const imageDefaul = 'https://images.unsplash.com/photo-1530685932526-48ec92998eaa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    return (
        <FlatList
            data={visibleData}
            onEndReached={loadMoreData}
            onEndReachedThreshold={0.5}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
            keyExtractor={(item, index) => `${item.url ?? item.title}-${index}`}
            renderItem={({ item }) => {
                return (
                    <>
                        <TouchableOpacity onPress={() => onPressItem(item)}>
                            <View style={styles.container}>
                                <View style={styles.imageContainer}>
                                    <Image style={styles.image} source={{ uri: item.urlToImage ? item.urlToImage : imageDefaul }} />
                                </View>
                                <View style={styles.textContainer}>
                                    <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>{item.title} </Text>
                                    <View style={styles.dateContainer}>
                                        <MaterialIcons name="calendar-month" size={24} color="gray" />
                                        <Text style={styles.dateText}>{new Date(item.publishedAt).toLocaleDateString('id-ID', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </>
                )
            }}
        />
    )
}

export default OtomotifNews;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        marginVertical: 8
    },
    imageContainer: {
        height: 90,
        width: 90,
        backgroundColor: 'lightgray',
        borderRadius: 20
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 20,
        overflow: 'hidden',
        resizeMode: 'cover'
    },
    textContainer: {
        flex: 1,
        flexShrink: 1,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    dateContainer: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    },
    dateText: {
        color: 'gray',
        fontWeight: 'semibold'
    }
})
