import React from 'react';
import { View, Image } from 'react-native';
import {globalStyles} from '../styles/globalStyle';


export default function Header(){
    return (
        <View style={globalStyles.headerContainer}>
            <Image source={require('../assets/nativelogo.png')}/>
        </View>
    ) 
}

