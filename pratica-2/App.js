import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Importação das telas
import Usuario from './Usuario';
import Login from './Login';
// Criação do Stack Navigator
const Stack = createStackNavigator();
export default function App() {
 return (
 <NavigationContainer>
 <Stack.Navigator initialRouteName="Home">
 <Stack.Screen name="Home" component={Login} />
 <Stack.Screen name="Usuario" component={Usuario} />
 </Stack.Navigator>
 </NavigationContainer>
 );
}