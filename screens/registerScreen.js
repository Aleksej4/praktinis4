import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import { CustomInput } from "../components/CustomInput";
import { CustomButton } from "../components/customButton";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from "../Firebase/firebase";
import { DataContext } from "../adsData/DataContext";


export const RegisterScreen = ({navigation}) => {
    const { setUserIdData, setEmailData } = useContext(DataContext);

    const [email, setEmailValue] = useState('');
    const [password, setPasswordValue] = useState('')

    const handlePasswordInputChange = (text) => {
        setPasswordValue(text)
    }

    const handleEmailInputChange = (text) => {
      setEmailValue(text);
    };

    const handleRegister = async () => {
        try{
            const userCredentials = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
            const user = userCredentials.user;

            if (user){
                setUserIdData(user.uid)
                setEmailData(email)
                console.log('Registered user: ', user)
                console.log('user ID: ', user.uid)
                navigation.navigate('AdsScreen')
            }

        } catch (error) {
            console.error('Registration error: ', error.message)
        }
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#DCDCDC'
        }}>
            <Text style={{fontSize: 24, margin: 30, fontWeight: 'bold'}}>Register page</Text>
            <CustomInput placeholder={"Email"} onChange={handleEmailInputChange} value={email} secureTextEntry={false}/>
            <CustomInput placeholder={"Password"} onChange={handlePasswordInputChange} value={password} secureTextEntry={true}/>
            <CustomButton text={"Register"} onPress = {handleRegister}/>
            <CustomButton text={"Back"} onPress = {() => {navigation.goBack()}}/>
        </View>
    ); 
}