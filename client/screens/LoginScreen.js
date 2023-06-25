import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
  const navigation = useNavigation();
  const goToHomeScreen = () => {
    navigation.navigate('HomeTabs');
  }
  return (
    <View className="flex-1 bg-white" style={{ backgroundColor: '#429F9E' }}>
      <SafeAreaView className="flex ">
        <View className="flex-row justify-center">
          <Image source={require("../assets/images/logo2.png")}
            style={{ width: 220, height: 200 }} />
        </View>
      </SafeAreaView>
      <View
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        className="flex-1 bg-white px-8 pt-8">
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Địa chỉ email</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="Địa chỉ email"
            value=""
          />
          <Text className="text-gray-700 ml-4">Mật khẩu</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
            secureTextEntry
            placeholder="Mật khẩu"
            value=""
          />
          <TouchableOpacity className="flex items-end">
            <Text className="text-gray-700 mb-5">Quên mật khẩu?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToHomeScreen}
            className="py-3 bg-yellow-400 rounded-xl">
            <Text
              className="text-xl font-bold text-center text-gray-700"
            >
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center space-x-12 mt-4">
        <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/google.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">
            Bạn chưa có tài khoản?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text className="font-semibold text-yellow-500">Đăng kí</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}