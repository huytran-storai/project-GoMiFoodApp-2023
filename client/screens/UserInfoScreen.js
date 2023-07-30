import { SafeAreaView, TouchableOpacity, View, Text, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../config/firebase';
export default function UserInfo() {
    const navigation = useNavigation();
    const [displayName, setDisplayName] = useState('');
    const [displayEmail, setDisplayEmail] = useState('');
    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            const userDisplayName = user.displayName;
            const userDisplayEmail = user.email;
            if (userDisplayName) {
                setDisplayName(userDisplayName);
            }
            if (userDisplayEmail) {
                setDisplayEmail(userDisplayEmail);
            }
        }
    }, []);
    const goToSettingScreen = () => {
        navigation.navigate('Setting');
    }
    return (
        <SafeAreaView>
            <View className="flex-row">
                <TouchableOpacity onPress={goToSettingScreen} className="w-[47px] h-[45px] ml-[10px] bg-teal-500 rounded-full justify-center items-center">
                    <Text className="text-[33px] bottom-[5px] font-large absolute text-white font-bold rounded-full">{"<"}</Text>
                </TouchableOpacity>
                <Text className=" ml-[45px] mt-[6px] text-black text-[20px] font-extrabold">Thông tin người dùng</Text>
            </View>
            <View className="w-[393px] h-[0px] mt-[9px] opacity-40 border border-black"></View>
            <ScrollView className="w-full h-full bg-gray-200 flex-45">
                <View className="w-full h-[161px] mt-[30px] bg-white">
                    <TouchableOpacity>
                        <View className='flex-row justify-between p-3 border border-gray-300'>
                            <Image className="w-[45px] h-[45px] ml-[10px] rounded-full" source={require('../assets/images/Avatar.png')} />
                            <Text className=" text-blue-500 mt-[25px] text-[13px] font-medium">{"Đổi ảnh đại diện"} {">"}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className='flex-row justify-between p-3 border border-gray-300'>
                            <Text className="text-black, text-[13px] font-bold ml-[10px]">{"Số điện thoại"}</Text>
                            <Text className="text-black, text-[13px]">{"********702"} {">"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View className="w-full h-[225px] mt-[10px] bg-white">
                    <TouchableOpacity>
                        <View className='flex-row justify-between p-3 border border-gray-300'>
                            <Text className="text-black, text-[13px] font-bold ml-[10px]">Họ và tên</Text>
                            <Text className="text-black, text-[13px]">{displayName} {">"}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className='flex-row justify-between p-3 border border-gray-300'>
                            <Text className="text-black, text-[13px] font-bold ml-[10px]">Email</Text>
                            <Text className="text-gray, text-[13px]">{displayEmail} {">"}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className='flex-row justify-between p-3 border border-gray-300'>
                            <Text className="text-black, text-[13px] font-bold ml-[10px]">{"Giới tính"}</Text>
                            <Text className="text-black, text-[13px]">{"Nam"} {">"}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className='flex-row justify-between p-3 border border-gray-300'>
                            <Text className="text-black, text-[13px] font-bold ml-[10px]">Ngày sinh</Text>
                            <Text className="text-gray, text-[13px]">{"Cập nhật ngay"} {">"}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className='flex-row justify-between p-3 border border-gray-300'>
                            <Text className="text-black, text-[13px] font-bold ml-[10px]">{"Nghề nghiệp"}</Text>
                            <Text className="text-gray, text-[13px]">{"Cập nhật ngay"} {">"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* <View className="justify-center items-center mt-[200px]">
                    <TouchableOpacity onPress={handleSubmit} className="w-[135px] h-[48px] mb-[10px] bg-teal-500 rounded-2xl justify-center items-center">
            <Text className=" text-white text-[16px] font-bold">Lưu</Text>
          </TouchableOpacity>
                </View> */}
            </ScrollView>
        </SafeAreaView>
    )
}