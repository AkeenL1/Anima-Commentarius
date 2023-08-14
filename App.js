import { StatusBar } from 'expo-status-bar';
import {Alert, Button, Dimensions, Image, Text, View, Pressable} from 'react-native';
import styles from "./assets/styles/app.styles";
import picture_logo from "./assets/images/anima_commentarius_logo_circle_v2(1).png"
import text_logo from "./assets/images/ac_text_logo_2.png"
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get('window');
import { SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
    const [loaded] = useFonts({
        Roman: require('./assets/fonts/Romana-Regular.otf'),
    });

    if (!loaded) {
        return null;
    }
    return (
    <View style={styles.container}>
        <LinearGradient
            colors={['rgb(0,20,86)',"rgb(67,12,77)", "black"]}
            style={styles.background}
        >
            <Image
                source={picture_logo}
                style={{
                    width: width,
                    height: height * 0.4,
                    top: 100
                }}
            />
            <Image
                source={text_logo}
                style= {{
                    width: width,
                    resizeMode: 'contain',
                    bottom: 120
                }}
            />
            <View style={styles.loginView}>
                <Pressable style={styles.loginButton}>
                    <Text style={styles.text}>Login</Text>
                </Pressable>
            </View>
            <StatusBar />
        </LinearGradient>
    </View>
  );
}
