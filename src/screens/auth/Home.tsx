import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainButton from '../../components/MainButton'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../../store/userActions'
export default function Home({navigation}) {

const isSignedIn = useSelector(state => state.userData.isSignedIn)
const userName = useSelector(state => state.userData.userName)
const dispatch = useDispatch()
  const handleClick = () =>{
    dispatch(loginAction( ))
    navigation.navigate('Tabs')
    
  }
  return (
    <View style = {styles.container} className="mt-8 px-2">
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