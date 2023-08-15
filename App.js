import { StatusBar } from 'expo-status-bar';
import {Alert, Button, Dimensions, Image, Text, View, Pressable, Platform, Animated, Easing} from 'react-native';
import styles from "./assets/styles/app.styles";
import picture_logo from "./assets/images/anima_commentarius_logo_circle_v2(1).png"
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import {useEffect, useState} from "react";

// todo: make the glowImage its own component
export default function App() {
    const [loaded] = useFonts({
        Roman: require('./assets/fonts/Romana-Regular.otf'),
    });

    const GlowImage = ({ }) => {
        const [animation, setAnimation] = useState(new Animated.Value(0));

        const borderColor = animation.interpolate({
            inputRange: [0,1,2,3,4,5,6],
            outputRange: ['#8350a8', '#50f0fa', '#e99ca4', '#faf9f9', '#e99ca4', '#50f0fa', '#8350a8']
        });

        useEffect(() => {
            const forward = Animated.timing(animation, {
                toValue: 1,
                duration: 2500,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: false,
            });

            const backward = Animated.timing(animation, {
                toValue: 0,
                duration: 2500,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: false,
            });

            Animated.loop(Animated.sequence([forward, backward])).start();
        }, [animation]);

        const animatedStyles = {
            shadowColor: borderColor,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 100,
            borderRadius: 50,
            backgroundColor: 'transparent',
            padding: 5,
        };

        return (
            <Animated.View style={animatedStyles}>
                <Image source={picture_logo} style={styles.logo} />
            </Animated.View>
        );
    };

    if (!loaded) {
        return null;
    }
    return (
    <View style={styles.container}>
        <LinearGradient
            colors={['rgba(250,192,192,0.9)',"rgb(44,2,44)", "black"]}
            style={styles.background}
        >
            <GlowImage />
            <View style={styles.loginView}>
                <Pressable style={styles.registerButton}>
                    <Text style={styles.registerText}>Register</Text>
                </Pressable>
                <Pressable style={styles.signInButton}>
                    <Text style={styles.signInText}>Sign In</Text>
                </Pressable>
            </View>
            <StatusBar />
        </LinearGradient>
    </View>
  );
}
