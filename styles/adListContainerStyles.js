import { StyleSheet } from "react-native";

export const adListContainerStyles = StyleSheet.create({

    adPhotoContainer: {
        width: 320,
        height: 170,
    },

    adFrameContainer: {
        backgroundColor: "#FFFFFF",
        width: 340,
        height: 260,
        margin: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    adDescriptionContainer: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        width: 320,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },

    adInfoContainer: {
        backgroundColor: '#FFFFFF',
        height: 50,
        width: 150,
        margin: 10,
        justifyContent: 'center'
    },
})