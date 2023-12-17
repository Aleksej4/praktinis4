import { StyleSheet } from "react-native";

export const adContainerStyles = StyleSheet.create({

    adFrameStyle: {
        width: "100%",
        height: 360,
        backgroundColor: '#EEEEEE',
    },

    adTitleStyle: {
        height: 100,
        justifyContent: 'center',
    },

    adImagesStyles: {
        marginTop: 5 ,
        marginStart: "1.4%",
        width: "97%",
        height: 250,
    },

    adPriceContainer: {
        width: "100%",
        height: 105,
        justifyContent: 'center',
        marginStart: 20,
    },

    adCarSpecsContainer: {
       height: 200,
       width: "50%",
       justifyContent: 'center',
       
    },

    adData: {
        width: "100%",
    }
})