import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignInInput from './screens/auth/SignInInput'
import Tabs from './screens/auth/Tabs'
import { Provider } from 'react-redux'
import { store } from './store/store'

export default function App() {
  const Stack = createStackNavigator()
  return (
    <Provider store={store}>
    <NavigationContainer
    
    >

    <Stack.Navigator initialRouteName='Tabs'>
     
      {/* <Stack.Screen
      name='SignInInput'
      component={SignInInput}
      options={{title: 'SignInInput',headerShown: false}}
      /> */}
       <Stack.Screen

      name='Tabs'
      component={Tabs}
      options={{headerShown:false}}
      />
    </Stack.Navigator>
  
    </NavigationContainer>
    </Provider>
   
  )
}

const styles = StyleSheet.create({})