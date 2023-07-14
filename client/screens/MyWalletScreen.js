import { SafeAreaView, TouchableOpacity, View, Text, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronRightIcon } from 'react-native-heroicons/solid';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
export default function MyWalletScreen() {
    const navigation = useNavigation();
    const goToProfileUserScreen = () => {
        navigation.navigate('HomeTabs');
    }
    const goToAddWalletScreen = () => {
        navigation.navigate('AddWallet');
    }
    const goToListWalletScreen = () =>{
        navigation.navigate('ListYourWallet')
    }

    return (
        <SafeAreaView className="w-[393px] h-[852px] bg-white">
            <View className="flex-row space-x-[90px]">
                <TouchableOpacity onPress={goToProfileUserScreen} className="w-[35px] h-[35px] ml-[13px] bg-teal-500 rounded-full justify-center items-center">
                    <ChevronLeftIcon style={{ color: 'white' }}></ChevronLeftIcon>
                </TouchableOpacity>
            </View>
            <View className="w-[393px] h-[49px] mt-[10px] bg-white border border-stone-300 justify-center">
                <TouchableOpacity onPress={goToAddWalletScreen} className="flex-row justify-between space-x-[130px] ml-[10px] ">
                    <Text className="text-[15px] mt-[5px] font-large text-black font-bold">Thêm thẻ tín dụng</Text>
                    <ChevronRightIcon style={{ color: 'black' }}></ChevronRightIcon>
                </TouchableOpacity>
            </View>
            <View className="w-[393px] h-[49px] mt-[10px] bg-white border border-stone-300 justify-center">
                <TouchableOpacity onPress={goToListWalletScreen} className="flex-row justify-between space-x-[130px] ml-[10px] ">
                    <Text className="text-[15px] mt-[5px] font-large text-black font-bold">Danh sách thẻ tín dụng của bạn</Text>
                    <ChevronRightIcon style={{ color: 'black' }}></ChevronRightIcon>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}