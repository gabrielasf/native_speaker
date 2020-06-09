import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {globalStyles} from '../styles/globalStyle';
import Header from '../styles/header';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Confirmation({navigation}) {

        const changePage = () => {
        navigation.navigate('Home');
        }
    
        return (
                <View>
                    <TouchableWithoutFeedback onPress={changePage}>
                        <View>
                            <Header />
                            <Text style={globalStyles.registrationText}>You have successfully registered!</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
        )
    
}


