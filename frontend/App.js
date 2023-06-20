// import React from 'react' :)
import React from 'react'

// redux imports
import { Provider } from 'react-redux'
import { store } from './src/redux/Redux'

// firebase imports
import { auth } from './src/firebase/Firebase'

// screen stack imports
import AuthScreens from './src/screens/auth/AuthScreens'
import CoreScreens from './src/screens/core/CoreScreens'

// navigation imports
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  const user = auth.currentUser

  return (
    <Provider store={store}>
      <NavigationContainer>
        {
          user ? <CoreScreens /> : <AuthScreens />
        }
      </NavigationContainer>
    </Provider>
  )
}

export default App
