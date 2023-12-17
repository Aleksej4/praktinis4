import { containerStyles } from "../styles/containerStyles";
import { createAdStyles } from "../styles/createAdStyles";
import { textStyles } from "../styles/textStyles";
import { CustomButton } from "../components/customButton";
import { useEffect, useState } from "react";
import { FIRESTORE_DB } from "../Firebase/firebase";
import { doc, getDoc, updateDoc } from 'firebase/firestore';

import {
    View,
    Text,
    TextInput,
    ScrollView
} from "react-native";

export const UpdateAd = ({route, navigation}) => {
    const { adId } = route.params

    const docRef = doc(FIRESTORE_DB, 'Ad', adId)

    const [price, setPrice] = useState('');
    const [carYear, setCarYear] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [mileage, setMileage] = useState('');
    const [engineType, setEngineType] = useState('');
    const [displacement, setDisplacement] = useState('');
    const [power, setPower] = useState('');
    const [description, setDescription] = useState('');
    const [contact, setContact] = useState('')

    useEffect(() => {
        getDoc(docRef)
        .then((docSnapshot) => {
            const existingData = docSnapshot.data()
            setPrice(existingData.Price)
            setCarYear(existingData.CarYear)
            setMake(existingData.Make)
            setModel(existingData.Model)
            setMileage(existingData.Mileage)
            setEngineType(existingData.EntineType)
            setDisplacement(existingData.Displacement)
            setPower(existingData.Power)
            setDescription(existingData.Description)
            setContact(existingData.Contact)
        })
    }, [])

    const handleUpdateAd = async () => {
        try {
            await updateDoc(docRef, {
              CarYear: carYear,
              Contact: contact,
              Description: description,
              Displacement: displacement,
              EntineType: engineType,
              Make: make,
              Mileage: mileage,
              Model: model,
              Power: power,
              Price: price,
            });
            console.log('Add updated');

            navigation.goBack()
            navigation.goBack()
          } catch (error) {
            console.error('Error updating ad:', error);
          }
    }

    return (
        <ScrollView>
            <View style={containerStyles.mainContainer}>
                <View style={createAdStyles.titleStyle}>
                    <Text style={{...textStyles.adTextStyle2, fontWeight: 'bold'}}>Provide information about your car below</Text>
                </View>

                <View style={createAdStyles.categoryNameStyle}>
                    <Text style={textStyles.adTextStyle2}>Basic car details</Text>
                </View>
                <View style={createAdStyles.textInputStyle}>
                    <Text style={textStyles.adTextStyle2}>Price:  </Text>
                    <TextInput style={{height: 50, fontSize: 16}} placeholder={"Provide car price"} keyboardType="numeric" value={price} onChangeText={(text) => setPrice(text)}/>
                </View>
                <View style={createAdStyles.textInputStyle}>
                    <Text style={textStyles.adTextStyle2}>Car year:  </Text>
                    <TextInput style={{height: 50, fontSize: 16}} placeholder={"Enter year"} keyboardType="numeric" value={carYear} onChangeText={(text) => setCarYear(text)}/>
                </View>
                <View style={createAdStyles.textInputStyle}>
                    <Text style={textStyles.adTextStyle2}>Make:  </Text>
                    <TextInput style={{height: 50, fontSize: 16}} placeholder={"Enter make"} value={make} onChangeText={(text) => setMake(text)}/>
                </View>
                <View style={createAdStyles.textInputStyle}>
                    <Text style={textStyles.adTextStyle2}>Model:  </Text>
                    <TextInput style={{height: 50, fontSize: 16}} placeholder={"Enter model"} value={model} onChangeText={(text) => setModel(text)}/>
                </View>
                <View style={createAdStyles.textInputStyle}>
                    <Text style={textStyles.adTextStyle2}>Mileage:  </Text>
                    <TextInput style={{height: 50, fontSize: 16}} placeholder={"Enter mileage"} keyboardType="numeric" value={mileage} onChangeText={(text) => setMileage(text)}/>
                </View>

                <View style={{...createAdStyles.categoryNameStyle, marginTop: 20}}>
                    <Text style={textStyles.adTextStyle2}>Engine details</Text>
                </View>
                <View style={createAdStyles.textInputStyle}>
                    <Text style={textStyles.adTextStyle2}>Type:  </Text>
                    <TextInput style={{height: 50, fontSize: 16}} placeholder={"Enter engine type"} value={engineType} onChangeText={(text) => setEngineType(text)}/>
                </View>
                <View style={createAdStyles.textInputStyle}>
                    <Text style={textStyles.adTextStyle2}>Displacemen:  </Text>
                    <TextInput style={{height: 50, fontSize: 16}} placeholder={"Enter displacement"} value={displacement} onChangeText={(text) => setDisplacement(text)}/>
                </View>
                <View style={createAdStyles.textInputStyle}>
                    <Text style={textStyles.adTextStyle2}>Power:  </Text>
                    <TextInput style={{height: 50, fontSize: 16}} placeholder={"Enter power in kw"} keyboardType="numeric" value={power} onChangeText={(text) => setPower(text)}/>
                </View>

                <View style={{...createAdStyles.categoryNameStyle, marginTop: 20}}>
                    <Text style={textStyles.adTextStyle2}>Contacts</Text>
                </View>
                <View style={createAdStyles.textInputStyle}>
                    <TextInput style={{height: 50, fontSize: 16}} placeholder={"Enter phone number"} value={contact} onChangeText={(text) => setContact(text)}/>
                </View>

                <View style={{...createAdStyles.categoryNameStyle, marginTop: 20}}>
                    <Text style={textStyles.adTextStyle2}>Description</Text>
                </View>
                <View style={createAdStyles.textInputStyle}>
                    <TextInput style={{height: 50, fontSize: 16}} placeholder={"Start write here"} value={description} onChangeText={(text) => setDescription(text)}/>
                </View>

                <View style={{...createAdStyles.buttonContainerStyle, marginTop: 40}}> 
                    <View style={{marginEnd: 50}}>
                        <CustomButton onPress={handleUpdateAd} text="Update ad"/>
                    </View>
                    <View style={{marginStart: 50}}>
                        <CustomButton onPress={() => {navigation.goBack()}} text="Cancel"/>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}