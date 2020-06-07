import React, {useState} from 'react';
//import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import { useFonts } from '@use-expo/font';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from './screens/home';
// import Register from './screens/register';
import NavStack from './routes/navStack';




// let getFont = () => Font.loadAsync({
//   'Comfortaa-Regular': require('./assets/fonts/Comfortaa-Regular.ttf'),
//   'Comfortaa-SemiBold': require('./assets/fonts/Comfortaa-SemiBold.ttf'),
//   'Comfortaa-Light': require('./assets/fonts/Comfortaa-Light.ttf'),
//   'Comfortaa-Bold': require('./assets/fonts/Comfortaa-Bold.ttf')
// });


export default function App() {

  let [fontsLoaded] = useFonts({
    'Comfortaa-Regular': require('./assets/fonts/Comfortaa-Regular.ttf'),
    'Comfortaa-SemiBold': require('./assets/fonts/Comfortaa-SemiBold.ttf'),
    'Comfortaa-Light': require('./assets/fonts/Comfortaa-Light.ttf'),
    'Comfortaa-Bold': require('./assets/fonts/Comfortaa-Bold.ttf')
    
  
  });
  
  //const [fontsAreLoaded, setFontsLoaded] = useState(false);
  //const Stack = createStackNavigator();

  // if (fontsAreLoaded) {
  //   return (
  //   //   <NavigationContainer>
  //   //   <Stack.Navigator initialRouteName="Home">
  //   //     <Stack.Screen name="begin" component={Home} />
  //   //     <Stack.Screen name="Register" component={Register} />
  //   //   </Stack.Navigator>
  //   // </NavigationContainer>

  //   <NavStack />
  //   )
  // } else {
  //   return(
  //     <AppLoading 
  //     startAsync={getFont}
  //     onFinish={setFontsLoaded(true)}
  //     />
  //   )
  // }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavStack />
    );
  }
};






