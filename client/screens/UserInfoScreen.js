import { SafeAreaView, TouchableOpacity, View, Text, ScrollView, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Switch } from 'react-native-elements';


export default function UserInfo() {
    const navigation = useNavigation();
    const [text,setText] = useState('');
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
        <SafeAreaView className="w-[393px] h-[852px] bg-white">
            <View className="flex-row">
                <TouchableOpacity onPress={goToSettingScreen} className="w-[47px] h-[45px] ml-[10px] bg-teal-500 rounded-full justify-center items-center">
                    <Text className="text-[33px] bottom-[5px] font-large absolute text-white font-bold rounded-full">{"<"}</Text>
                </TouchableOpacity>
                <Text className=" ml-[45px] mt-[6px] text-black text-[20px] font-extrabold">Thông tin người dùng</Text>
            </View>
            <View className="w-[393px] h-[0px] mt-[9px] opacity-40 border border-black"></View>
            <ScrollView className="w-full h-full bg-gray-200 flex-45">
             <View className="w-full h-[161px] mt-[30px] bg-white">
                <TouchableOpacity className="flex-row h-[70px] space-x-[200px] border border-gray-300">
                <Image className="w-[45px] h-[45px] mt-[12px] ml-[10px] rounded-full" source={require('../assets/images/Avatar.png')} />
                <Text className=" text-blue-500 mt-[25px] text-[13px] font-medium">{"Đổi ảnh đại diện   >"}</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row h-[45px] space-x-[200px] border border-gray-300">
                    <Text className="text-black, text-[13px] font-bold mt-[12px] ml-[10px]">{"Tên đăng nhập"}</Text>
                    <Text className="text-black, text-[13px] mt-[12px]">{"syhuy0107"}</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row h-[45px] space-x-[200px] border border-gray-300">
                    <Text className="text-black, text-[13px] font-bold mt-[12px] ml-[10px]">{"Số điện thoại"}</Text>
                    <Text className="text-black, text-[13px] mt-[12px]">{"********702  >"}</Text>
                </TouchableOpacity>
             </View>
             <View className="w-full h-[225px] mt-[10px] bg-white">
                <TouchableOpacity className="flex-row h-[45px] space-x-[280px] border border-gray-300">
                    <Text className="text-black, text-[13px] font-bold mt-[12px] ml-[10px]">{"Tên"}</Text>
                    <Text className="text-black, text-[13px] mt-[12px]">{"Trần Huy"}</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row h-[45px] space-x-[260px] border border-gray-300">
                    <Text className="text-black, text-[13px] font-bold mt-[12px] ml-[10px]">{"Email"}</Text>
                    <Text className="text-gray, text-[13px] mt-[12px]">{"Nhập email"}</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row h-[45px] space-x-[260px] border border-gray-300">
                    <Text className="text-black, text-[13px] font-bold mt-[12px] ml-[10px]">{"Giới tính"}</Text>
                    <Text className="text-black, text-[13px] mt-[12px]">{"Nam >"}</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row h-[45px] space-x-[210px] border border-gray-300">
                    <Text className="text-black, text-[13px] font-bold mt-[12px] ml-[10px]">{"Ngày sinh"}</Text>
                    <Text className="text-gray, text-[13px] mt-[12px]">{"Cập nhật ngay  >"}</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row h-[45px] space-x-[190px] border border-gray-300">
                    <Text className="text-black, text-[13px] font-bold mt-[12px] ml-[10px]">{"Nghề nghiệp"}</Text>
                    <Text className="text-gray, text-[13px] mt-[12px]">{"Cập nhật ngay  >"}</Text>
                </TouchableOpacity>
             </View>
            <View className="justify-center items-center mt-[200px]">
          <TouchableOpacity onPress={handleSubmit} className="w-[135px] h-[48px] mb-[10px] bg-teal-500 rounded-2xl justify-center items-center">
            <Text className=" text-white text-[16px] font-bold">Lưu</Text>
          </TouchableOpacity>
        </View>
            </ScrollView>
        </SafeAreaView>
    )
}