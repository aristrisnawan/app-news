import { Image, StyleSheet, Text, View } from "react-native";

const CardComponent = () => {
    return (
        <View style={styles.containerImg}>
            <Image style={styles.styleImg} source={{ uri: 'https://images.unsplash.com/photo-1530685932526-48ec92998eaa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
            <Text style={styles.titleBreakingNews}>
                The Google Pixel 10a Is Barely Different From the Pixel 9a
            </Text>
            <View style={styles.containerAuthor}>
                <View style={styles.containerAvatar}>
                    <Image style={styles.avatarImage} source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
                </View>
                <Text style={styles.dateText}>10 Jan 2026</Text>
            </View>
        </View>
    )
}

export default CardComponent;
const styles = StyleSheet.create({
    containerImg: {
        width: '100%',
        height: 380,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    styleImg: {
        width: '100%',
        height: 250,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        resizeMode: 'cover'
    },
    titleBreakingNews: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    containerAuthor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    containerAvatar: {
        width: 40,
        height: 40,
        backgroundColor: 'black',
        borderRadius: 100
    },
    avatarImage: {
        width: 40,
        height: 40,
        borderRadius: 100,
        overflow: 'hidden'
    },
    dateText: {
        color: 'gray',
        fontWeight: 'semibold'
    }
})