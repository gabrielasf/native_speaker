import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import {globalStyles} from '../styles/globalStyle';


export default function Header(){
    return (
        <View style={globalStyles.headerContainer}>
            <Image  source={require('../assets/nativelogo.png')}/>
        </View>
    
    ) 
}

// const styles = StyleSheet.create({
//     headerContainer :{
//         backgroundColor: '#252A37',
//         justifyContent: 'center',
//         flexDirection: 'row',
//     },
    
//   });