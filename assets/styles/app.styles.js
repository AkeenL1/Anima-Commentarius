import {Dimensions, StyleSheet} from "react-native";
import {useFonts} from "expo-font";

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
      height: "100%"
    },
    background: {
        display: "flex",
        justifyContent: "space-between",
        height: "100%"
    },
    loginView: {
        bottom: 200,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        alignContent: "center",
        width: "100%"
    },
    signInButton: {
        borderWidth: 2,
        borderColor:"rgb(37,36,36)",
        borderRadius: 20,
        padding: 5,
        width: "40%",
        backgroundColor: 'rgb(37,36,36)',
    },
    registerText: {
        padding: 20,
        fontSize: 25,
        color: "black",
        textAlign: "center",
        fontFamily: "Roman"
    },
    signInText: {
        padding: 20,
        fontSize: 25,
        color: "white",
        textAlign: "center",
        fontFamily: "Roman"
    },
    registerButton: {
        borderWidth: 2,
        borderRadius: 20,
        padding: 5,
        width: "40%",
        backgroundColor: 'white',
        borderColor: 'white'
    },
    logo: {
        width: width,
        height: height * 0.4,
        top: 100,

    }

});

export default styles