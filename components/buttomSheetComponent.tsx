import { useEffect, useState } from "react";
import { Dimensions, Linking, Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import Animated, {
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

const ButtomSheet = ({ visible, onClose, article }: { visible: boolean, onClose: () => void, article: any }) => {
    const [shouldRender, setShouldRender] = useState(visible);
    const translateY = useSharedValue(SCREEN_HEIGHT);
    const opacity = useSharedValue(0);
    //animasi saat visible berubah
    useEffect(() => {
        if (visible) {
            setShouldRender(true);
            translateY.value = withTiming(0, { duration: 500 })
            opacity.value = withTiming(1, { duration: 500 })
        } else {
            opacity.value = withTiming(0, { duration: 350 })
            translateY.value = withTiming(SCREEN_HEIGHT, { duration: 400 }, (isFinished) => {
                if (isFinished) {
                    runOnJS(setShouldRender)(false);
                }
            });
        }
    }, [visible])

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
        };
    });

    const backdropStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));

    // Jika state internal false, jangan gambar apa pun (Backdrop & Sheet hilang)
    if (!shouldRender || !article) return null;

    const openWebsite = async (url: string) => {
        const open = await Linking.canOpenURL(url)

        if (open) {
            await Linking.openURL(url)
        } else {
            alert(`Don't know how to open this URL: ${url}`);
        }
    }


    return (
        <Pressable onPress={onClose} style={[styles.backdrop, backdropStyle]}>
            <Animated.View style={[styles.buttomSheet, animatedStyle]}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 10, marginHorizontal: 16, textAlign: 'center' }}>{article?.title}</Text>
                <Text style={{ marginHorizontal: 16, textAlign: 'center' }}>{article?.description}</Text>
                <TouchableOpacity
                    onPress={() => {openWebsite(article.url);onClose()}}
                    style={{ backgroundColor: '#2F48FF', borderRadius: 20, marginTop: 16, paddingVertical: 8, width: '50%' }}>
                    <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Contonui Read</Text>
                </TouchableOpacity>
            </Animated.View>
        </Pressable>
    )
}

export default ButtomSheet;

const styles = StyleSheet.create({
    backdrop: {
        position: 'absolute',
        flex: 1,
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    buttomSheet: {
        width: '100%',
        height: '40%',
        backgroundColor: 'white',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
})
