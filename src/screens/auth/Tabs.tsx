import {   StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from './Tabs/Profile'

import Reels from './Tabs/Reels'
import Tiktok from './Tabs/Tiktok'
const Tabs = () => {
    const Tabs = createBottomTabNavigator()
  return (
   <Tabs.Navigator initialRouteName='Profile'
   screenOptions={{}}
   >
    <Tabs.Screen
    name='Profile'
    component={Profile}
    options={{headerShown:false}}
    />
    <Tabs.Screen
    name='Setting'
    component={Tiktok}
    options={{headerShown:false}}
    // options={{tabBarIcon: ()=>{
    //     <Image
    //     source={require('src\assets\icons\tik-tok.png')}
    //     />
    // }}}
    />
    <Tabs.Screen
    name='Reels'
    component={Reels}
    options={{headerShown:false}}

    />
   </Tabs.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})