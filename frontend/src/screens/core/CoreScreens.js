// import React from 'react' :)
import React from 'react'

// icon import
import Ionicons from "@expo/vector-icons/Ionicons"

// navigation imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// navigation utils

const Tab = createBottomTabNavigator()

// core screen imports
import Home from './home/Home'
import Create from './create/Create'
import Library from './library/Library'

// this renders a core component basic UI set up with a bottom tab bar with three tabs
const CoreScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Library') {
            iconName = focused ? 'library' : 'library-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#C56E3F',
        inactiveTintColor: '#000000',
      }}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false}}/>
      <Tab.Screen name="Create" component={Create} options={{ headerShown: false}} />
      <Tab.Screen name="Library" component={Library} options={{ headerShown: false}} />
    </Tab.Navigator>
  )
}

export default CoreScreens
