import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainButton from '../../components/MainButton'
export default function Home({navigation}) {
  const handleClick = () =>{
    navigation.push('Tabs')
  }
  return (
    <View style = {styles.container}>
      <Text>Home</Text>
<MainButton  title='Go to Tabs' onPress={handleClick}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})