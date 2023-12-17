import React from 'react';
import { customButtonStyle } from '../styles/customButtonStyle';
import { Text, TouchableHighlight} from 'react-native';

export const CustomButton = ({ text, onPress}) => (
    <TouchableHighlight underlayColor="#EEEEEE" style={customButtonStyle.mainButton} onPress={onPress}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{text}</Text>
    </TouchableHighlight>
);