import { adContainerStyles } from "../styles/adContainerStyles";
import { containerStyles } from "../styles/containerStyles";
import { ImageSwiper } from "../components/imageSwiper";
import { textStyles } from "../styles/textStyles";
import { useContext } from "react";
import { DataContext } from "../adsData/DataContext"; 
import { CustomButton } from "../components/customButton";
import { FIRESTORE_DB } from "../Firebase/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import {
    View,
    Text,
    ScrollView
} from "react-native"

export const AdScreen = ({route, navigation}) => {
    const { userId } = useContext(DataContext)
    const { car } = route.params;

    const deleteAd = () => {
        const docRef = doc(FIRESTORE_DB, 'Ad', car.id)
        deleteDoc(docRef)
        .then(() => {
            console.log('Ad deleted')
        })
        .catch((error) => {
            console.log('Could not remove ad: ', error)
        })
    }

    const EditButtons = () => {
        return (
            <View style={{flexDirection: 'row', margin: 25}}>
                <CustomButton onPress={() => {navigation.navigate('UpdateAd', {adId: car.id})}} text="Edit ad"/>
                <CustomButton onPress={() => {
                    deleteAd(), 
                    navigation.goBack()
                    }} text="Delete ad"/>
            </View>
        );
    }

    return(
        <ScrollView>
            <View style={containerStyles.mainContainer}>
                <View style={adContainerStyles.adTitleStyle}>
                    <Text style={{...textStyles.adTextStyle1, marginStart: 10}}>{car.make} {car.model}</Text>
                    <Text style={{...textStyles.adTextStyle2, marginStart: 10}}>{car.engine.displacement}   {car.engine.type}</Text>
                </View> 
                <View style={adContainerStyles.adFrameStyle}>
                    <ImageSwiper imageUrls={car.photos}/>
                    <View style={adContainerStyles.adPriceContainer}>
                        <Text style={textStyles.adTextStyle2}>Price</Text>
                        <Text style={textStyles.adTextStyle1}>{car.price}€</Text>
                    </View>
                </View>
                <View style={{...containerStyles.infoContainer, flexDirection: 'row'}}>
                    <View style={adContainerStyles.adCarSpecsContainer}>
                        <Text style={textStyles.adTextStyle3}>Year: {car.year}</Text>
                        <Text style={textStyles.adTextStyle3}>Make: {car.make}</Text>
                        <Text style={textStyles.adTextStyle3}>Model: {car.model}</Text>

                    </View>
                    <View style={adContainerStyles.adCarSpecsContainer}>
                        <Text style={textStyles.adTextStyle3}>Mileage: {car.mileage}</Text>
                        <Text style={textStyles.adTextStyle3}>Engine: {car.engine.displacement} {car.engine.type}</Text>
                        <Text style={textStyles.adTextStyle3}>Power: {car.engine.powerKw}Kw</Text>
                    </View>
                </View>
                <View style={{...adContainerStyles.adData, alignItems: 'center'}}>
                    <Text style={{...textStyles.adTextStyle1, marginTop: 25}}>{car.seller.name}</Text>
                    <Text style={{...textStyles.adTextStyle1, marginBottom: 25}}>{car.seller.contact}</Text>
                </View>
                <View style={{...adContainerStyles.adData, justifyContent: 'center'}}>
                    <Text style={{...textStyles.adTextStyle3, marginBottom: 25}}>{car.description}</Text>
                </View>
                <View>
                    {car.creatorId === userId && <EditButtons />}
                </View>
            </View>
        </ScrollView>
    );
}