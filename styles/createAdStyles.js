import { StyleSheet } from "react-native";

export const createAdStyles = StyleSheet.create({
    textInputStyle: {
        flexDirection: 'row',
        width: "100%",
        height: 60,
        alignItems: 'center',
        marginStart: 45,
    },

    titleStyle: {
        width: "100%",
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },

    categoryNameStyle: {
        width: "100%",
        height: 30,
        justifyContent: 'center',
        marginStart: 20,
    },

    buttonContainerStyle: {
        width: "100%",
        height: 80,
        justifyContent: 'center',
        flexDirection: 'row'
    },
})