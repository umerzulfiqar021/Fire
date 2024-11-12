import { StyleSheet, Text, View,TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { logoutAction } from '../../../store/userActions';
const Reels = () => {
  const isSignedIn = useSelector(state => state.userData.isSignedIn)
const userName = useSelector(state => state.userData.userName)
const dispatch = useDispatch()
  return (
    

    <>
  
       <View style={styles.logout}>
      <TouchableOpacity  onPress={()=> dispatch(logoutAction())}>
        <AntDesign name="logout" size={30} color='red' />

      </TouchableOpacity>

    </View>
   
    
    <View style={styles.container}>


        <Text>Reels</Text>


        {isSignedIn ? (
          <View>
            <Text> the User is Siged IN

            </Text>
            <Text> user name is {userName}</Text>
          </View>
        ) : (
          <View>
            <Text>Please login first {userName}</Text>
          </View>
        )}
      </View></>
  )
}

export default Reels

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logout:{
    
    alignSelf: 'flex-end',
    paddingRight: 5,
    paddingTop: 5
    
  }

})