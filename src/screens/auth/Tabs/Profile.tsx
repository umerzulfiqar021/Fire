import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MainButton from '../../../components/MainButton'
import { loginAction, logoutAction,updateNameAction,OldAction } from '../../../store/userActions'
import { RootState } from '../../../store/store'
const Profile = () => {
//   const isSignedIn = useSelector(state => state.userData.isSignedIn)
// const userName = useSelector((state : RootState) => state.userData.userName) //rootstate for getting recomendation
const {isSignedIn,userName} = useSelector((state : RootState) => state.userData) //rootstate for getting recomendation
//here we destructure this  
const dispatch = useDispatch()
  return (
    <View style = {styles.container}>
      <Text>Profile</Text>

      <MainButton title='Login' onPress={()=>dispatch(loginAction( ))}/>
        <MainButton title='Logout' onPress={()=> dispatch(logoutAction())}/>
          <MainButton title='Change Name' onPress={()=>dispatch(updateNameAction('Yahaya Shahid'))}/>
            <MainButton title='Previous Name' onPress={()=> dispatch(OldAction())}/>
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

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})