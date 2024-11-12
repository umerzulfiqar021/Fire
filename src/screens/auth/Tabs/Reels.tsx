import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { logoutAction } from '../../../store/userActions';

const Reels = () => {
  const isSignedIn = useSelector(state => state.userData.isSignedIn);
  const userName = useSelector(state => state.userData.userName);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logout} onPress={() => dispatch(logoutAction())}>
        <AntDesign name="logout" size={30} color="red" />
      </TouchableOpacity>

      <Text>Reels</Text>

      {isSignedIn ? (
        <View>
          <Text>The User is Signed In</Text>
          <Text>Username: {userName}</Text>
        </View>
      ) : (
        <View>
          <Text>Please login first</Text>
        </View>
      )}
    </View>
  );
};

export default Reels;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#777',
  },
  logout: {
    position: 'absolute',
    top: 10,     // Distance from the top of the screen
    right: 10,   // Distance from the right side of the screen
    padding: 5,
  },
});
