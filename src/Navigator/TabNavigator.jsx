import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Login/Login';
import SelectionPage from '../components/Dashboard/SelectionPage';
import Dashboard from '../components/Dashboard/Dashboard';
import Creations from '../components/Creations/Creations';
import Color from '../Styling Materials/Color';
import NewOrder from '../components/Order/NewOrder';

const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
      <Stack.Screen name='selectionpage' component={SelectionPage} options={{headerShown:false}}/>
      <Stack.Screen name='Dashboard' component={Dashboard} options={{headerShown:false}}/>
      <Stack.Screen name='New Order' component={NewOrder} options={{headerShown:true,headerStyle:{backgroundColor:Color.maincolor}}}/>
      <Stack.Screen name='creations' component={Creations} options={{headerShown:true,headerStyle:{backgroundColor:Color.maincolor}}}/>
    </Stack.Navigator>
  );
}

export default TabNavigator;

