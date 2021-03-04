import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import SellerLogIn from './Screens/SellerLogIn';
import UserLogIn from './Screens/UserLogIn';
import Temp from "./Screens/Temp";
import FlatList from "./Screens/Flatlist";

const Stack = createStackNavigator();


const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Temp">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SellerLogIn" component={SellerLogIn} options={{ title: 'Seller Log In' }} />
      <Stack.Screen name="UserlogIn" component={UserLogIn} options={{ title: 'Buyer Log In' }} />
      <Stack.Screen name="Temp" component={Temp} options={{ title: 'Temp' }} />
      <Stack.Screen name="FlatList" component={FlatList} options={{ title: 'FlatList' }} />
    </Stack.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  )
}

export default App;
