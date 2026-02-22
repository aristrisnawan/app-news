import LoadingComponent from "@/components/loadingComponent";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const AllNews = ({ isFocused }: { isFocused: boolean }) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isFocused) {
            setIsLoading(true);
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [isFocused]);

    if (isLoading) {
        return (
            <View style={{ flex: 1, paddingTop: 8 }}>
                {[1, 2, 3].map((key) => <LoadingComponent key={key} />)}
            </View>
        );
    }

    const newsData = [
        {
            id: 1,
            title: "The Bose QuietComfort Ultra Gen 2 Headphones ",
            date: "10 Jan 2026",
            imageUrl: 'https://images.unsplash.com/photo-1530685932526-48ec92998eaa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 2,
            title: "The Google Pixel 10a Is Barely Different From the Pixel 9a",
            date: "10 Jan 2026",
            imageUrl: 'https://images.unsplash.com/photo-1530685932526-48ec92998eaa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 3,
            title: "The Apple iPhone 15 Pro Max Is the Ultimate Power User Phone",
            date: "10 Jan 2026",
            imageUrl: 'https://images.unsplash.com/photo-1530685932526-48ec92998eaa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 4,
            title: "The Samsung Galaxy S24 Ultra Is the Best Android Phone You Can Buy",
            date: "10 Jan 2026",
            imageUrl: 'https://images.unsplash.com/photo-1530685932526-48ec92998eaa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ]
    return (
            <FlatList
                data={newsData}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={{ uri: item.imageUrl }} />
                            </View>
                            <View style={styles.textContainer}>
                                <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>{item.title} </Text>
                                <View style={styles.dateContainer}>
                                    <MaterialIcons name="calendar-month" size={24} color="gray" />
                                    <Text style={styles.dateText}>{item.date}</Text>
                                </View>
                            </View>
                        </View>
                    )
                }}
            />
    )
}

export default AllNews;

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
