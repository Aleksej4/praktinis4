import Swiper from "react-native-swiper";
import { adContainerStyles } from "../styles/adContainerStyles";
import {
    View,
    Image
} from "react-native";

export const ImageSwiper = ({ imageUrls }) => {
    return (
        <View style={adContainerStyles.adImagesStyles}>
            <Swiper showsPagination={true} loop={false}>
              {imageUrls.map((imageUrl, index) => (
                <View key={index}>
                  <Image source={{ uri: imageUrl }} style={adContainerStyles.adImagesStyles} />
                </View>
              ))}
            </Swiper>
        </View>
      );
}