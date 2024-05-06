import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'; // Importez MaterialIcons ou tout autre jeu d'icônes que vous utilisez
import SendScreen from './screens/SendScreen';
import HistoryScreen from './screens/HistoryScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#841584',
        inactiveTintColor: 'gray',
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Send':
              iconName = 'send';
              break;
            case 'History':
              iconName = 'history';
              break;
            case 'Home':
              iconName = 'home';
              break;
            case 'Profile':
              iconName = 'person';
              break;
            default:
              iconName = 'home';
              break;
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Send" component={SendScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      {/* <Tab.Screen name="Profile">
  {() => <ProfileScreen uid={uid} />}
</Tab.Screen> */}

    </Tab.Navigator> 
  );
}







// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { MaterialIcons } from '@expo/vector-icons'; // Importez MaterialIcons ou tout autre jeu d'icônes que vous utilisez
// import SendScreen from './screens/SendScreen';
// import HistoryScreen from './screens/HistoryScreen';
// import HomeScreen from './screens/HomeScreen';
// import ProfileScreen from './screens/ProfileScreen';

// const Tab = createBottomTabNavigator();

// export default function Dashboard() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           let iconName;

//           switch (route.name) {
//             case 'Send':
//               iconName = 'send';
//               break;
//             case 'History':
//               iconName = 'history';
//               break;
//             case 'Home':
//               iconName = 'home';
//               break;
//             case 'Profile':
//               iconName = 'person';
//               break;
//             default:
//               iconName = 'home';
//               break;
//           }

//           return <MaterialIcons name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: '#841584',
//         inactiveTintColor: 'gray',
//       }}
//     >
//       <Tab.Screen name="Send" component={SendScreen} />
//       <Tab.Screen name="History" component={HistoryScreen} />
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//       {/* <Tab.Screen name="Profile">
//   {() => <ProfileScreen uid={uid} />}
// </Tab.Screen> */}

//     </Tab.Navigator> 
//   );
// }



// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// // import SendScreen from 'src/screens/SendScreen.js';
// // import HistoryScreen from '.screens/HistoryScreen';
// // import HomeScreen from '.screens/HomeScreen';
// // import SettingsScreen from '.screens/SettingsScreen';
// import SendScreen from './screens/SendScreen'; // Modifié
// import HistoryScreen from './screens/HistoryScreen'; // Modifié
// import HomeScreen from './screens/HomeScreen'; // Modifié
// import SettingsScreen from './screens/SettingsScreen'; // Modifié

// const Tab = createBottomTabNavigator();

// export default function Dashboard() {
//   return (
//     // <NavigationContainer>
//       <Tab.Navigator initialRouteName="Home">
//         <Tab.Screen name="Send" component={SendScreen} />
//         <Tab.Screen name="History" component={HistoryScreen} />
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     // </NavigationContainer>
//   );
// }
