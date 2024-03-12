import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import SendScreen from 'src/screens/SendScreen.js';
// import HistoryScreen from '.screens/HistoryScreen';
// import HomeScreen from '.screens/HomeScreen';
// import SettingsScreen from '.screens/SettingsScreen';
import SendScreen from './screens/SendScreen'; // Modifié
import HistoryScreen from './screens/HistoryScreen'; // Modifié
import HomeScreen from './screens/HomeScreen'; // Modifié
import SettingsScreen from './screens/SettingsScreen'; // Modifié

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Send" component={SendScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
