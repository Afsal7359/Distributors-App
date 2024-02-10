import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Login/Login';
import SelectionPage from '../components/Dashboard/SelectionPage';
import Dashboard from '../components/Dashboard/Dashboard';
import Creations from '../components/Creations/Creations';
import Color from '../Styling Materials/Color';
import NewOrder from '../components/Order/NewOrder';
import AllProducts from '../components/AllProducts/AllProducts';
import Orderhistory from '../components/OrderHistory/Orderhistory';

const Stack = createNativeStackNavigator();

const ScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
      <Stack.Screen name='selectionpage' component={SelectionPage} options={{headerShown:false}}/>
      <Stack.Screen name='Dashboard' component={Dashboard} options={{headerShown:false}}/>
      <Stack.Screen name='creations' component={Creations} options={{headerShown:true,headerStyle:{backgroundColor:Color.maincolor}}}/>
      <Stack.Screen name='New Order' component={NewOrder} options={{headerShown:true,headerStyle:{backgroundColor:Color.maincolor}}}/>
      <Stack.Screen name='All Products' component={AllProducts} options={{headerShown:true,headerStyle:{backgroundColor:Color.maincolor}}}/>
      <Stack.Screen name='Order History' component={Orderhistory} options={{headerShown:true,headerStyle:{backgroundColor:Color.maincolor}}}/>
    </Stack.Navigator>
  );
}

export default ScreenNavigator;

