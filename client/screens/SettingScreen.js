import { SafeAreaView, Dimensions, TouchableOpacity, View, Text } from 'react-native'
import React, { useEffect, } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function SettingScreen() {
	const navigation = useNavigation();
	const goToPassword = () => {
		navigation.navigate('PasswordSetting');
	}
	const goToProfileUserScreen = () => {
		navigation.navigate('HomeTabs');
	}
	const goToNotiSetting = () => {
		navigation.navigate('Notification');
	}
	const goToDeleteAccount = () => {
		navigation.navigate('DeleteAccount');
	}
	const goToUserInfo = () => {
		navigation.navigate('UserInfo');
	}

	return (
		<SafeAreaView className="w-[393px] h-[852px] bg-white">
			<View className="flex-row">
				<TouchableOpacity onPress={goToProfileUserScreen} className="w-[47px] h-[45px] ml-[10px] bg-teal-500 rounded-full justify-center items-center">
					<Text className="text-[33px] bottom-[5px] font-large absolute text-white font-bold rounded-full">{"<"}</Text>
				</TouchableOpacity>
				<Text className=" ml-[92px] mt-[6px] text-black text-[27px] font-extrabold">Cài Đặt</Text>
			</View>
			<View className="w-[393px] h-[0px] mt-[9px] opacity-40 border border-black"></View>
			<View className="w-[393px] h-[49px] bg-white border border-stone-300">
				<TouchableOpacity onPress={goToUserInfo} className="w-[150px] h-[40px] justify-center">
					<Text className="text-black mt-[10px] ml-[10px] text-[15.5px]">Thông tin cá nhân</Text>
				</TouchableOpacity>
			</View>
			<View className="w-[393px] h-[49px] bg-white border border-stone-300">
				<TouchableOpacity onPress={goToPassword} className="w-[150px] h-[40px] justify-center">
					<Text className="text-black mt-[10px] ml-[10px] text-[15px]">Mật Khẩu</Text>
				</TouchableOpacity>
			</View>
			<View className="w-[393px] h-[49px] bg-white border border-stone-300">
				<TouchableOpacity onPress={goToNotiSetting} className="w-[150px] h-[40px] justify-center">
					<Text className="text-black mt-[10px] ml-[10px] text-[15px]">Cài đặt thông báo</Text>
				</TouchableOpacity>
			</View>
			<View className="w-[393px] h-[49px] bg-white border border-stone-300">
				<TouchableOpacity onPress={goToDeleteAccount} className="w-[150px] h-[40px] justify-center">
					<Text className="text-black mt-[10px] ml-[10px] text-[15px]">Xoá tài khoản</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}