import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/components/Login/Login';
import SelectionPage from './src/components/Dashboard/SelectionPage';
import Dashboard from './src/components/Dashboard/Dashboard';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='selectionpage' component={SelectionPage} options={{headerShown:false}}/>
        <Stack.Screen name='dashboard' component={Dashboard} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
