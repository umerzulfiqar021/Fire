import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainButton from '../../components/MainButton'
import { useSelector } from 'react-redux'
export default function Home({navigation}) {

const isSignedIn = useSelector(state => state.userData.isSignedIn)
const userName = useSelector(state => state.userData.userName)

  const handleClick = () =>{
    navigation.navigate('Tabs')
  }
  return (
    <View style = {styles.container}>
      <Text>Home</Text>
<MainButton  title='Go to Tabs' onPress={handleClick}/>
{
  isSignedIn ? (
    <View> 
      <Text> the User is Siged IN
       
      </Text>
      
      </View>
  ) : (
    <View>
      <Text>Please login first {userName}</Text>
      </View>
  )
}

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