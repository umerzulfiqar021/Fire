import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/auth/Home'
import SignInInput from './screens/auth/SignInInput'
import Tabs from './screens/auth/Tabs'
export default function App() {
  const Stack = createStackNavigator()
  return (

    <NavigationContainer>

    <Stack.Navigator initialRouteName='Home'>
     
      <Stack.Screen
      name='Home'
      component={Home}
      options={{title: 'Home'}}
      />
       <Stack.Screen
      name='Tabs'
      component={Tabs}
      />
    </Stack.Navigator>

    </NavigationContainer>

   
  )
}

const styles = StyleSheet.create({})