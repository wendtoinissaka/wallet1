import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';
import Details from './src/Details';
import Dashbord from './src/Dashbord';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown:false}}
          />
         <Stack.Screen
          name='Details'
          component={Details}
          options={{ headerShown:false}}
          />
          <Stack.Screen
          name='Dashbord'
          component={Dashbord}
          options={{ headerShown:false}}
          />
         
      </Stack.Navigator>
    </NavigationContainer>
  )
}