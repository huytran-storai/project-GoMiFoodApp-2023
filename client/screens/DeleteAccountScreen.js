import { SafeAreaView, Dimensions, TouchableOpacity, View, Text, TextInput, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { async } from '@firebase/util';
import { signOut } from '@firebase/auth';
import { auth } from '../config/firebase';
const { width, height } = Dimensions.get('window');
export default function DeleteAccount() {
    const navigation = useNavigation();
    const goToProfileUser = () => {
        navigation.goBack();
    }
    const handleLogout = async () => {
        await signOut(auth);
    }
    return (
        <SafeAreaView className="w-[393px] h-[852px] bg-white">
           <View className="flex-row">
            <TouchableOpacity onPress={goToProfileUser} className="w-[40px] h-[40px] ml-[10px] bg-teal-500 rounded-full justify-center items-center">
                 <Text className="text-[28px] bottom-[5px] font-large absolute text-white font-bold rounded-full">{"<"}</Text>
             </TouchableOpacity>
            <Text className=" ml-[80px] mt-[6px] text-black text-[20px] font-extrabold">Xoá tài khoản</Text>
            </View>
            <ScrollView className="mt-[20px] w-full h-full ">
                <Image source={require('../assets/images/xoataikhoan.png')} className="w-[350px] h-[550px] ml-[20px]" />
                    <View>
                        <TouchableOpacity onPress={handleLogout} className="w-[135px] h-[48px] mt-[10px] ml-[128px] bg-teal-500 rounded-2xl justify-center items-center">
                            <Text className=" absolute text-white text-[16px] font-bold">{"Đồng ý!"}</Text>
                        </TouchableOpacity>
                    </View>
            </ScrollView>
        </SafeAreaView>
        
    )
}