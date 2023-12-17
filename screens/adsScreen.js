import { Ad } from "../components/Ad";
import { containerStyles } from "../styles/containerStyles";
import {
    View,
    ScrollView,
    RefreshControl
} from "react-native";
import { useEffect, useState } from "react";
import { FIRESTORE_DB } from "../Firebase/firebase";
import { useIsFocused } from '@react-navigation/native';
import { collection, getDocs,} from "firebase/firestore";

export const AdsScreen = ({navigation}) => {
  const [cars, setCars] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const isFocused = useIsFocused()

  const fetchData = async () => {
    try {
      const collectionRef = collection(FIRESTORE_DB, 'Ad')
      const querySnapshot = await getDocs(collectionRef)

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
    setRefreshing(true)
    fetchData()
  }

  return (
      <ScrollView
      refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
      }>
        <View style={containerStyles.mainContainer}>
          {cars.map((car) => (
            <View key={car.id}>
              <Ad car={car} onPress={() => {navigation.navigate('AdScreen', {car: car})}}/>
            </View>
          ))}
        </View>
      </ScrollView>
    )
      
}