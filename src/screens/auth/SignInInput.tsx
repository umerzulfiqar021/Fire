import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FormInputController from '../../components/controllers/FormInputController'
import { useForm,Controller } from 'react-hook-form'
import MainButton from '../../components/MainButton'
import { yupResolver } from '@hookform/resolvers/yup'
import { signUp } from '../../constants/schemas/loginschema'
import { loginAction } from '../../store/userActions'
import { useDispatch, useSelector } from 'react-redux'
const SignInInput = ({navigation}) => {
    const {
        control,
        handleSubmit,
        reset,
        formState:{errors}
      } = useForm({
        resolver: yupResolver (signUp)
      })
      const submit = (data: any) => {
        // console.log(data,'jvv');
        
        // Alert.alert(JSON.stringify(data));
        // reset();
        dispatch(loginAction( ))
    navigation.navigate('Tabs')
      }
      const dispatch = useDispatch()
  return (
    <View style = {styles.container}>
       
       <FormInputController
        name={'email'} control={control}
        errors={errors}
        placeholder={'Enter Email'}
    props={{keyboardType:'email-address'}}
      />
       <FormInputController
        name={'password'} control={control}
        placeholder={'Enter Password'}
    props={{secureTextEntry:true}}
    errors={errors}
      />
     
       
     
      <MainButton
        title='Sign In'
        onPress={handleSubmit(submit)}
      />
    </View>
  )
}

export default SignInInput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#000"
    },
  
})

function dispatch(arg0: any) {
  throw new Error('Function not implemented.')
}
