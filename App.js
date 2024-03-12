import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';
import SignUpScreen from './src/SignUpScreen';
import Dashboard from './src/Dashboard';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown:false}}
          />
         <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown:false}}
          />
          <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown:false}}
          />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}