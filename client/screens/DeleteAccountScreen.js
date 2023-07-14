import { SafeAreaView, Dimensions, TouchableOpacity, View, Text, TextInput, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
const { width, height } = Dimensions.get('window');
export default function DeleteAccount() {
    const navigation = useNavigation();
    const goToProfileUser = () => {
        navigation.goBack();
    }
    const goToHomeScreen = () => {
        navigation.navigate('HomeTabs');
    }
    return (
        <View className="w-[393px] h-[852px] bg-teal-500">
            <TouchableOpacity onPress={goToHomeScreen} className="w-[38px] h-[39px] left-[17px] text-center top-[45px] absolute bg-white rounded-full justify-center items-center">
                <Text className="text-[28px] bottom-[5px] font-large absolute text-teal-500 font-bold rounded-full">{"<"}</Text>
            </TouchableOpacity>
            <View className="w-[393px] h-[790px] mt-[130px] bg-white rounded-3xl">
                <Text className=" mt-[10px] font-bold text-black text-[16px] text-center">Xoá tài khoản</Text>
                <ScrollView className="mt-[20px]">
                    
                    <View>
                        <TouchableOpacity onPress={goToProfileUser} className="w-[135px] h-[48px] mt-[10px] ml-[128px] bg-teal-500 rounded-2xl justify-center items-center">
                            <Text className=" absolute text-white text-[16px] font-bold">{"Submit"}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}