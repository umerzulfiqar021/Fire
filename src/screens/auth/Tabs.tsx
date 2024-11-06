import {   StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from './Tabs/Profile'

import Reels from './Tabs/Reels'
import Tiktok from './Tabs/Tiktok'
const Tabs = () => {
    const Tabs = createBottomTabNavigator()
  return (
   <Tabs.Navigator initialRouteName='Profile'>
    <Tabs.Screen
    name='Profile'
    component={Profile}
    />
    <Tabs.Screen
    name='Setting'
    component={Tiktok}
    // options={{tabBarIcon: ()=>{
    //     <Image
    //     source={require('src\assets\icons\tik-tok.png')}
    //     />
    // }}}
    />
    <Tabs.Screen
    name='Reels'
    component={Reels}

    />
   </Tabs.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})