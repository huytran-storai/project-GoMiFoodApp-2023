import { SafeAreaView, TouchableOpacity, View, Text, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Switch } from 'react-native-elements';


export default function PasswordSetting() {
    const navigation = useNavigation();
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordVerifyError, setPasswordVerifyError] = useState('');
    const [newpassword, setNewpassword] = useState('');
    const handleSubmit = () => {
        validateFields()
    }
    const goToSettingScreen = () => {
        navigation.navigate('Setting');
    }
    const handleChangeText = (inputText) => {
        setText(inputText);
    };
    const validateFields = () => {
        let isValid = true;
        // Xác thực mật khẩu
        if (password.trim() !== passwordVerify.trim()) {
            setPasswordVerifyError('Mật khẩu không khớp');
            isValid = false;
        }
        if (password.trim() === '') {
            setPasswordError('Vui lòng nhập mật khẩu');
            isValid = false;
        } else if (passwordVerify.trim() === '') {
            setPasswordVerifyError('Vui lòng nhập mật khẩu');
            isValid = false;
        }
        else if (password.trim().length <= 6) {
            setPasswordError('Mật khẩu phải có ít nhất 6 kí tự');
            isValid = false;
        } else {
            setPasswordError('');
        }
        return isValid;
    }
    return (
        <SafeAreaView className="w-[393px] h-[852px] bg-white ">
            <View className="flex-row">
                <TouchableOpacity onPress={goToSettingScreen} className="w-[47px] h-[45px] ml-[10px] bg-teal-500 rounded-full justify-center items-center">
                    <Text className="text-[33px] bottom-[5px] font-large absolute text-white font-bold rounded-full">{"<"}</Text>
                </TouchableOpacity>
                <Text className=" ml-[83px] mt-[6px] text-black text-[25px] font-extrabold">Mật khẩu</Text>
            </View>
            <View className="w-[393px] h-[0px] mt-[9px] opacity-40 border border-black"></View>
            <View className="h-full bg-gray-200 px-5">
                <Text className="text-[13px] mt-[10px] ml-[6px] font-bold ">Nhập mật khẩu hiện tại</Text>
                <TextInput
                secureTextEntry
                    placeholder='Mật khẩu hiện tại'
                    onChangeText={handleChangeText}
                    className={"p-4 mt-[10px] bg-white text-gray-700 rounded-2xl border border-stone-500"}
                    value={text}>
                </TextInput>
                <Text className="text-[13px] mt-[10px] ml-[6px] font-bold ">Nhập mật khẩu mới</Text>
                <TextInput
                    className={`p-4 mt-[10px] bg-white text-gray-700 rounded-2xl border border-stone-500 ${passwordError !== '' && 'border border-red-500'}`}
                    secureTextEntry
                    value={password}
                    onChangeText={value => setPassword(value)}
                    placeholder='Mật Khẩu mới'
                />
                {passwordError !== '' && <Text className="text-red-500 ml-4">{passwordError}</Text>}
                <Text className="text-[13px] mt-[10px] ml-[6px] font-bold ">Xác nhận mật khẩu mới</Text>
                <TextInput
                    className={`p-4 mt-[10px] bg-white text-gray-700 rounded-2xl border border-stone-500 ${passwordVerifyError !== '' && 'border border-red-500'}`}
                    secureTextEntry
                    value={passwordVerify}
                    onChangeText={setPasswordVerify}
                    placeholder='Xác nhận'
                />
                {passwordVerifyError !== '' && <Text className="text-red-500 ml-4">{passwordVerifyError}</Text>}
                <View className="justify-center items-center mt-[290px]">
                    <TouchableOpacity onPress={handleSubmit} className="w-[135px] h-[48px] mb-[10px] bg-teal-500 rounded-2xl justify-center items-center">
                        <Text className=" text-white text-[16px] font-bold">Lưu</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}