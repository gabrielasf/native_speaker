import React from 'react';
import {AppLoading} from 'expo';
import { useFonts } from '@use-expo/font';
import NavStack from './routes/navStack';


export default function App() {

    let [fontsLoaded] = useFonts({
    'Comfortaa-Regular': require('./assets/fonts/Comfortaa-Regular.ttf'),
    'Comfortaa-SemiBold': require('./assets/fonts/Comfortaa-SemiBold.ttf'),
    'Comfortaa-Light': require('./assets/fonts/Comfortaa-Light.ttf'),
    'Comfortaa-Bold': require('./assets/fonts/Comfortaa-Bold.ttf')
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <NavStack />;
  }
};






