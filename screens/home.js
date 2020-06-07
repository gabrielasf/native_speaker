import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {globalStyles} from '../styles/globalStyle';

export default function Home() {
    
        return (
            <View style= {globalStyles.container}>
                <Text style={globalStyles.appName }>Native Speaker</Text>
                <Text style = {globalStyles.slogan}>Level up your language skills</Text>
            </View>
        )
    
}


