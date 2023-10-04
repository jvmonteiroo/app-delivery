import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { images } from './images';
import Onboarding from './src/screens/Onboarding';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Onboarding"component={Onboarding}/>
        <stack.Screen name="Home"component={Home}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}