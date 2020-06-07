// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from '../screens/home';
// import Register from '../screens/register';
// import Confirmation from '../screens/confirmation';


// const screens = {
//     Home: {
//         screen: Home
//     },
//     Register: {
//         screen: Register
//     },
//     Confirmation: {
//         screen: Confirmation,
//     }
// }

// const HomeStack = createStackNavigator(screens);

// export default NavigationContainer(HomeStack);

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Register from '../screens/register';


export default function NavStack() {

  const Stack = createStackNavigator();
    
    return (
        <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Teste" component={Home} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
    )

}




