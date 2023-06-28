import {
  View, Text, TouchableOpacity, Image, TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
  const navigation = useNavigation();
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [emailErrorLogin, setEmailLoginError] = useState('');
  const [passwordErrorLogin, setPasswordLoginError] = useState('');

  const goToHomeScreen = () => {
    if (validateFields()) {
      navigation.navigate('HomeTabs');
    }
  };

  const validateFields = () => {
    let isValid = true;

    if (emailLogin.trim() === '') {
      setEmailLoginError('Vui lòng nhập địa chỉ email');
      isValid = false;
    } else {
      setEmailLoginError('');
    }

    if (passwordLogin.trim() === '') {
      setPasswordLoginError('Vui lòng nhập mật khẩu');
      isValid = false;
    } else {
      setPasswordLoginError('');
    }

    return isValid;
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-white" style={{ backgroundColor: '#429F9E' }}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-center">
          <Image source={require("../assets/images/logo2.png")} style={{ width: 220, height: 200 }} />
        </View>
      </SafeAreaView>
      <View style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }} className="flex-1 bg-white px-8 pt-8">
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Địa chỉ email</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl "
            secureTextEntry
            placeholder="Địa chỉ email"
            value={emailLogin}
            onChangeText={setEmailLogin}
          />
          {emailErrorLogin !== '' && <Text className="text-red-500 ml-4">{emailErrorLogin}</Text>}
          <Text className="text-gray-700 ml-4">Mật khẩu</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
            secureTextEntry
            placeholder="Mật khẩu"
            value={passwordLogin}
            onChangeText={setPasswordLogin}
          />
          {passwordErrorLogin !== '' && <Text className="text-red-500 ml-4">{passwordErrorLogin}</Text>}
          <TouchableOpacity className="flex items-end">
            <Text className="text-gray-700 mb-5">Quên mật khẩu?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToHomeScreen} className="py-3 bg-yellow-400 rounded-xl">
            <Text className="text-xl font-bold text-center text-gray-700">Đăng nhập</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center space-x-12 mt-4">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/google.png')} className="w-10 h-10" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">Bạn chưa có tài khoản?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text className="font-semibold text-yellow-500">Đăng kí</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
      </TouchableWithoutFeedback>

    </KeyboardAvoidingView>
    

  )
}
