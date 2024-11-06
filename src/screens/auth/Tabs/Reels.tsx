import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
const Reels = () => {
  const isSignedIn = useSelector(state => state.userData.isSignedIn)
const userName = useSelector(state => state.userData.userName)
  return (
    <View style = {styles.container}>
      <Text>Reels</Text>
      {
  isSignedIn ? (
    <View> 
      <Text> the User is Siged IN

      </Text>
      <Text> user name is {userName}</Text>
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

export default Reels

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})