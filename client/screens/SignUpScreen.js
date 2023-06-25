import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

// subscribe for more videos like this :)
export default function SignUpScreen() {
    const navigation = useNavigation();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const goToHomeScreen = () => {
        if (validateFields()) {
            navigation.navigate('HomeTabs');
        }
    };
    const validateFields = () => {
        let isValid = true;
        if (fullName.trim() === '') {
            setFullNameError('Vui lòng nhập họ và tên');
            isValid = false;
        } else {
            setFullNameError('');
        }

        if (phoneNumber.trim() === '') {
            setPhoneNumberError('Vui lòng nhập số điện thoại');
            isValid = false;
        } else {
            setPhoneNumberError('');
        }

        if (email.trim() === '') {
            setEmailError('Vui lòng nhập địa chỉ email');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (password.trim() === '') {
            setPasswordError('Vui lòng nhập mật khẩu');
            isValid = false;
        } else {
            setPasswordError('');
        }

        return isValid;
    };
    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: '#429F9E' }}>
            <SafeAreaView className="flex">
                <View className="flex-row justify-start">
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
                    >
                        <ArrowLeftIcon size="20" color="black" />
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center">
                </View>
            </SafeAreaView>
            <View className="flex-1 bg-white px-8 pt-8"
                style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
            >
                <View className="form space-y-2">
                    <Text className="text-gray-700 ml-4">Họ và tên</Text>
                    <TextInput
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                        value={fullName}
                        onChangeText={setFullName}
                        placeholder='Họ và tên'
                    />
                    {fullNameError !== '' && <Text className="text-red-500 ml-4">{fullNameError}</Text>}
                    <Text className="text-gray-700 ml-4">Địa chỉ email</Text>
                    <TextInput
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Địa chỉ email'
                    />
                    {emailError !== '' && <Text className="text-red-500 ml-4">{emailError}</Text>}
                    <Text className="text-gray-700 ml-4">Số điện thoại</Text>
                    <TextInput
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        placeholder='Số điện thoại'
                    />
                    {phoneNumberError !== '' && <Text className="text-red-500 ml-4">{phoneNumberError}</Text>}
                    <Text className="text-gray-700 ml-4">Mật Khẩu</Text>
                    <TextInput
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl "
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        placeholder='Mật Khẩu'
                    />
                    {passwordError !== '' && <Text className="text-red-500 ml-4">{passwordError}</Text>}
                    <TouchableOpacity
                        className="py-3 bg-yellow-400 rounded-xl" onPress={goToHomeScreen}
                    >
                        <Text className="font-xl font-bold text-center text-gray-700">
                            Đăng kí
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
                    <Text className="text-gray-500 font-semibold">Bạn đã có tài khoản rồi?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text className="font-semibold text-yellow-500"> Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}