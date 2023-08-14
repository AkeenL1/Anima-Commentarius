import {StyleSheet} from "react-native";
import {useFonts} from "expo-font";

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
        bottom: 225,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    loginButton: {
        borderWidth: 2,
        borderColor: "#a07b89be344",
        borderRadius: 20,
        width: "75%",
        backgroundColor: 'rgba(159,158,158,0.5)'
    },
    text: {
        padding: 5,
        fontSize: 33,
        color: "white",
        textAlign: "center",
        fontFamily: "Roman"
    }
});

export default styles