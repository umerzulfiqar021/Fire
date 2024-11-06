import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
const Profile = () => {
  const isSignedIn = useSelector(state => state.userData.isSignedIn)
const userName = useSelector(state => state.userData.userName)

  return (
    <View>
      <Text>Profile</Text>
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

export default Profile

const styles = StyleSheet.create({})