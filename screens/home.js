import React from 'react';
import { Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import {globalStyles} from '../styles/globalStyle';

export default function Home({ navigation }) {
    
    const changePage = () => {
       navigation.navigate('Register');
    }
        
    setTimeout(() => {
        changePage(); 
    }, 2000); 


    return (
        <TouchableWithoutFeedback onPress={changePage}>
        <View style={globalStyles.welcome}>
            <View style={globalStyles.image}>
            <Image source={require('../assets/nativelogo.png')}/>
                <Text style={globalStyles.title}>Native Speaker</Text>
                <Text style={globalStyles.slogan}>Level Up your language skills</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
        )
}
