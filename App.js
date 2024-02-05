import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigator from './src/Navigator/TabNavigator';
import ScreenNavigator from './src/Navigator/ScreenNavigator';
import Dashboard from './src/components/Dashboard/Dashboard';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddScreen from './src/components/Dashboard/AddScreen';
import Color from './src/Styling Materials/Color';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="MainScreen" component={ScreenNavigator} options={{headerShown:false,tabBarIcon: ({ color, size }) => (
      <Icon name="dashboard" color={color} size={size} />
        ),}}/>
         <Tab.Screen name="AddScreen" component={AddScreen} options={{tabBarLabelStyle:{display:"none"},headerShown:false,tabBarIcon: ({ color, size }) => (
      <Icon name="plus" color={color} size={size} />
    ),}}/>
        <Tab.Screen name="Screen" component={TabNavigator} options={{headerShown:false,tabBarIcon: ({ color, size }) => (
      <Icon name="user" color={color} size={size} />
    ),}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
