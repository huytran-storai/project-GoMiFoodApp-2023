import { SafeAreaView, TouchableOpacity, View, Text } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Switch } from 'react-native-elements';


export default function NotificationSetting() {
    const navigation = useNavigation();
    const goToSettingScreen = () => {
        navigation.navigate('Setting');
    }
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
    };
    return (
        <SafeAreaView className="w-[393px] h-[852px] bg-white">
            <View className="flex-row">
                <TouchableOpacity onPress={goToSettingScreen} className="w-[47px] h-[45px] ml-[10px] bg-teal-500 rounded-full justify-center items-center">
                    <Text className="text-[33px] bottom-[5px] font-large absolute text-white font-bold rounded-full">{"<"}</Text>
                </TouchableOpacity>
                <Text className=" ml-[76px] mt-[6px] text-black text-[25px] font-extrabold">Thông báo</Text>
            </View>
            <View className="w-[393px] h-[0px] mt-[9px] opacity-40 border border-black"></View>
            <View className="w-[393px] h-[55px] flex-row space-x-[75px] justify-center items-center bg-white border border border border border-stone-300">
                <View className="flex-col">
                    <Text className="text-[15px] mt-[4px] ml-[5px] text-bold">Thông báo đẩy</Text>
                    <Text className="text-[11px] ml-[5px] mt-[2px] w-[255px] ">Khuyến khích bạn bật nó lên, để nhận thông báo về tất cả các tin tức hoặc thông báo mới nhất</Text>
                </View>
                <Switch
                    value={isEnabled}
                    onValueChange={toggleSwitch}
                    color={{ color: 'blue' }}
                    className="mt-[2px]"
                />
            </View>
        </SafeAreaView>
    )
}