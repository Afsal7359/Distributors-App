import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/components/Login/Login';
import SelectionPage from './src/components/Dashboard/SelectionPage';
import Dashboard from './src/components/Dashboard/Dashboard';
import NewOrder from './src/components/Order/NewOrder';
import Color from './src/Styling Materials/Color';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './src/Styling Materials/CustomDrawer';


const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
    {/* <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='selectionpage' component={SelectionPage} options={{headerShown:false}}/>
      
        <Stack.Screen name='New Order' component={NewOrder} options={{headerShown:true,headerStyle:{backgroundColor:Color.maincolor}}}/>
      </Stack.Navigator>
    </NavigationContainer> */}
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Dashboard"
     drawerContent={(props)=> <CustomDrawer {...props}/>}>
        <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='selectionpage' component={SelectionPage} options={{headerShown:false}}/>
        <Stack.Screen name='Dashboard' component={Dashboard} options={{headerShown:true,headerStyle:{backgroundColor:Color.maincolor}}}/>
        <Stack.Screen name='New Order' component={NewOrder} options={{headerShown:true,headerStyle:{backgroundColor:Color.maincolor}}}/>
    </Drawer.Navigator>
  </NavigationContainer>
  </>
  )
}
