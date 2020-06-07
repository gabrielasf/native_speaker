import React, {useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import Register from './screens/register';


const getFont = () => Font.loadAsync({
  'comfortaa-regular' : require('./assets/fonts/Comfortaa-Regular.ttf'),
  'comfortaa-semibold' : require('./assets/fonts/Comfortaa-SemiBold.ttf'),
  'comfortaa-light' : require('./assets/fonts/Comfortaa-Light.ttf'),
  'comfortaa-bold' : require('./assets/fonts/Comfortaa-Bold.ttf')
});


export default function App() {
  
  const [fontsAreLoaded, setFontsLoaded] = useState(false);
  const Stack = createStackNavigator();

  if (fontsAreLoaded) {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  } else {
    return(
      <AppLoading 
      startAsync={getFont}
      onFinish={setFontsLoaded(true)}
      />
    )
  }
}


