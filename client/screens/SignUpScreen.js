import {
    View, Text, TouchableOpacity, Image, TextInput,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function SignUpScreen() {
    const navigation = useNavigation();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordVerifyError, setPasswordVerifyError] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const handleSubmit = async () => {
        if (validateFields()) {
            if (email && password) {
                try {
                    await createUserWithEmailAndPassword(auth, email, password);
                } catch (err) {
                    console.log('got error: ', err.message);
                }
            }
        }
    }
    const validateFields = () => {
        let isValid = true;
        // Xác thực họ và tên
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (fullName.trim() === '') {
            setFullNameError('Vui lòng nhập họ và tên');
            isValid = false;
        } else if (!nameRegex.test(fullName.trim())) {
            setFullNameError('Họ và tên chỉ được chứa chữ');
            isValid = false;
        } else {
            setFullNameError('');
        }

        // Xác thực số điện thoại
        const phoneRegex = /^\d{10}$/;
        if (phoneNumber.trim() === '') {
            setPhoneNumberError('Vui lòng nhập số điện thoại');
            isValid = false;
        } else if (!phoneRegex.test(phoneNumber.trim())) {
            setPhoneNumberError('Số điện thoại không hợp lệ');
            isValid = false;
        } else {
            setPhoneNumberError('');
        }

        // Xác thực email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === '') {
            setEmailError('Vui lòng nhập địa chỉ email');
            isValid = false;
        } else if (!emailRegex.test(email.trim())) {
            setEmailError('Email không hợp lệ');
            isValid = false;
        } else {
            setEmailError('');
        }


        // Xác thực mật khẩu
       
        if (password.trim() === '') {
            setPasswordError('Vui lòng nhập mật khẩu');
            isValid = false;
        }
        else if (password.trim().length < 6) {
            setPasswordError('Mật khẩu phải có ít nhất 6 kí tự');
            isValid = false;
        } else {
            setPasswordError('');
            
        }

        if (password.trim() !== passwordVerifyError.trim()) {
            setPasswordError('Mật khẩu không khớp');
            isValid = false;
        }
        else{
            setPasswordVerifyError('');
        }


        return isValid;


    };
    return (
        <KeyboardAwareScrollView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                    <View className="flex-1 bg-white px-8 pt-8 h-screen"
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
                                onChangeText={value => setEmail(value)}
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
                                onChangeText={value => setPassword(value)}
                                placeholder='Mật Khẩu'
                            />
                            {passwordError !== '' && <Text className="text-red-500 ml-4">{passwordError}</Text>}
                            <Text className="text-gray-700 ml-4">Nhập Mật Khẩu Lần 2</Text>
                            <TextInput
                                className="p-4 bg-gray-100 text-gray-700 rounded-2xl "
                                secureTextEntry
                                value={passwordVerify}
                                onChangeText={setPasswordVerify}
                                placeholder='Mật Khẩu'
                            />
                            {passwordVerifyError !== '' && <Text className="text-red-500 ml-4">{passwordVerifyError}</Text>}
                            <TouchableOpacity
                                className="py-3 bg-yellow-400 rounded-xl" onPress={handleSubmit}
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
            </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>

    )
}