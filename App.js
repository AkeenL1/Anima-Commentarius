import { StatusBar } from 'expo-status-bar';
import {Alert, Button, Dimensions, Image, Text, View} from 'react-native';
import styles from "./assets/styles/app.styles";
import picture_logo from "./assets/images/anima_commentarius_logo_circle.png"
import text_logo from "./assets/images/Untitled(1).png"
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
        <Image
            source={picture_logo}
            style={{
                width: width,
                height: height * 0.3,
                top: 100
            }}
        />
        <Image
            source={text_logo}
            style={{
                width: width,
                height: height* .09,
                bottom: 120
            }}
        />
        <View style={styles.loginButton}>
            <Button
                title="Login"
                onPress={() => Alert.alert('Cannot press this one')}
            />
        </View>
        <StatusBar />
    </View>
  );
}
