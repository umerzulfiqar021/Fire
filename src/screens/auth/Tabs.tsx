import {   StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from './Tabs/Profile'
// import Icon from 'react-native-vector-icons/Fontisto';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Reels from './Tabs/Reels'

import Tiktok from './Tabs/Tiktok'
// import Icon from '@ant-design/icons';
const Tabs = () => {
    const Tabs = createBottomTabNavigator()
  return (
   <Tabs.Navigator initialRouteName='Profile'
   screenOptions={{tabBarShowLabel: false,
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'grey'


   }}
   >
    <Tabs.Screen
    name='Profile'
    component={Profile}
    options={{headerShown:false,
      tabBarIcon : ({color,size}) => (
        <AntDesign name="home" size={size} color= {color} />
      )
        
      
    }}
    />
    <Tabs.Screen
    name='Setting'
    component={Tiktok}
    options={{headerShown:false,
      tabBarIcon : ({color,size}) => (
        <AntDesign name="setting" size={size} color= {color} />
      )
        
    }}
    // options={{tabBarIcon: ()=>{
    //     <Image
    //     source={require('src\assets\icons\tik-tok.png')}
    //     />
    // }}}
    />
    <Tabs.Screen
    name='Reels'
    component={Reels}
    options={{headerShown:false,
      tabBarIcon : ({color,size}) => (
        <AntDesign name="profile" size={size} color= {color} />
      )
        
    }}

    />
   </Tabs.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})