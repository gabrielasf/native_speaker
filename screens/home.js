import React from 'react';
import { Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import {globalStyles} from '../styles/globalStyle';

export default function Home({ navigation }) {
    
    const changePage = () => {
        navigation.navigate('Register');
    }

    return (
        <TouchableWithoutFeedback onPress={changePage}>
        <View style={globalStyles.welcome}>
            <View style={globalStyles.image}>
            <Image source={require('/Users/gabriela/solo_projects/react_native_app_test/react_native_challenge/assets/nativelogo.png')}/>
                <Text style={globalStyles.title}>Native Speaker</Text>
                <Text style={globalStyles.slogan}>Level Up your language skills</Text>
                </View>
        </View></TouchableWithoutFeedback>
        )
    
}



