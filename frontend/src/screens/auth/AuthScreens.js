import React from 'react'
import Register from './register/Register'
import Contacts from './contacts/Contacts'

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

const AuthScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false}} />
      <Stack.Screen name="ContactImport" component={Contacts} options={{ headerShown: false}} />
    </Stack.Navigator>
  )
}

export default AuthScreens
