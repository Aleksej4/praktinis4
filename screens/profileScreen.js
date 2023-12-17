import { useState, useEffect } from "react";
import { profileStyles } from "../styles/profileStyles";
import { textStyles } from "../styles/textStyles";
import { containerStyles } from "../styles/containerStyles";
import { CustomButton } from "../components/customButton";
import { DataContext } from "../adsData/DataContext";
import { Ad } from "../components/Ad";
import { FIRESTORE_DB } from "../Firebase/firebase";
import { useIsFocused } from '@react-navigation/native';
import {
    View,
    Text,
    Image,
    ScrollView,
    RefreshControl
} from "react-native"
import { useContext } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ProfileScreen = ({navigation}) => {
    const {userId, email} = useContext(DataContext)
    const isFocused = useIsFocused(); 
    const [refreshing, setRefreshing] = useState(false);
    const [cars, setCars] = useState([])

    const fetchData = async () => {
        try {
          const collectionRef = collection(FIRESTORE_DB, 'Ad')
          const querySnapshot = await getDocs(query(collectionRef, where ('UserId', '==', userId)))

          const fetchData = []
          querySnapshot.forEach((doc) => {

            const carData = {
              id: doc.id,
              year: doc.data().CarYear,
              make: doc.data().Make,
              model: doc.data().Model,
              mileage: doc.data().Mileage,
              description: doc.data().Description,
              seller: {
                contact: doc.data().Contact
              },
              price: doc.data().Price,
              engine: {
                type: doc.data().EntineType,
                displacement: doc.data().Displacement,
                powerKw: doc.data().Power
              },
              photos: doc.data().Photos || [],
              creatorId: doc.data().UserId
            }
            fetchData.push(carData)
          })
          setCars(fetchData)
        } catch (error) {
          console.error ("error fetching data: ", error)
        } finally {
            setRefreshing(false)
        }
      }

    useEffect(() => {
      if (isFocused){
        setRefreshing(true)
        fetchData()
      }
    }, [isFocused])

    const onRefresh = () => {
        setRefreshing(true);
        fetchData();
      };

    return(
        <View style={containerStyles.mainContainer}>
            <View style={profileStyles.infoContainer}>
                <Image source={require('../assets/profile.jpg')} style={{borderRadius: 100, width: 120, height: 120}}/>
                <Text style={{...textStyles.adTextStyle1, marginTop: 20}}>{email}</Text>
            </View>
            <View style={profileStyles.buttonsContainer}>
                <CustomButton onPress={() => {navigation.navigate('CreateAd')}} text="Create ad"/>
            </View>
            <ScrollView style={profileStyles.myAdsContainer} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
                <View style={{ alignItems: 'center'}}>
                    {cars.map((car) => (
                        <View key={car.id}>
                            <Ad car={car} onPress={() => {navigation.navigate('AdScreen', {car: car})}}/>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}