import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { images } from './images';
import Onboarding from './src/screens/Onboarding';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from './src/screens/ProductDetails';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Onboarding"component={Onboarding}/>
        <Stack.Screen name="Home"component={Home}/>
        <Stack.Screen name="ProductDetails"component={ProductDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}