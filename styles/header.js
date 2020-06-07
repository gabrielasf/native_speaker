import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function Header(){
    return (
        <View style={styles.header}>
            <View style={styles.image}>
            <Image source={require('/Users/gabriela/solo_projects/react_native_app_test/react_native_challenge/assets/nativelogo.png')}/>
                <Text>Image here</Text>
                </View>
        </View>
    )
}



const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      position: 'absolute',
      alignItems: 'center'
    }
  });