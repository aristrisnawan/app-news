import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from "react-native-reanimated";

const LoadingComponent = () => {
    const opacity = useSharedValue(0.3);

    // Efek berkedip (pulsing)
    useEffect(() => {
        opacity.value = withRepeat(
            withSequence(withTiming(0.7, { duration: 600 }), withTiming(0.3, { duration: 600 })),
            -1, true
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({ opacity: opacity.value }));

    return (
        <View style={[styles.container, { marginBottom: 15 }]}>
            <Animated.View style={[styles.imageContainer, animatedStyle]} />
            <View style={styles.textContainer}>
                <View>
                    <Animated.View style={[{ height: 20, width: '90%', backgroundColor: 'lightgray', borderRadius: 10 }, animatedStyle]} />
                    <Animated.View style={[{ height: 20, width: '70%', backgroundColor: 'lightgray', borderRadius: 10, marginTop: 10 }, animatedStyle]} />
                </View>
                <Animated.View style={[{ height: 20, width: '40%', backgroundColor: 'lightgray', borderRadius: 10, marginTop: 10 }, animatedStyle]} />
            </View>
        </View>
    );
};

export default LoadingComponent;

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