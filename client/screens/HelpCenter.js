import { SafeAreaView, Dimensions, TouchableOpacity, View, Text, TextInput, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
const { width, height } = Dimensions.get('window');
export default function HelpCenter() {
    const navigation = useNavigation();
    const [text, setText] = useState('');
    const handleChangeText = (inputText) => {
        setText(inputText);
    };
    const goToProfileUser = () => {
        navigation.navigate('Tôi');
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
                <Text className=" mt-[10px] font-bold text-black text-[16px] text-center">Trung tâm chăm sóc khách hàng</Text>
                <ScrollView className="mt-[20px]">
                    <View className="pl-4 pr-2 w-[370px] ml-[3px] h-[49px] justify-center rounded-2xl bg-white border border-stone-500">
                        <Text className="text-[14px] font-bold mb-[10px] mt-[10px]">Tôi muốn thay đổi đơn hàng</Text>
                    </View>
                    <View className="pl-4 pr-2 w-[370px] ml-[3px] h-[49px] justify-center rounded-2xl bg-white border border-stone-500">
                        <Text className="text-[14px] font-bold mb-[10px] mt-[10px]">Món tôi nhận được không như mong đợi</Text>
                    </View>
                    <View className="pl-4 pr-2 w-[370px] ml-[3px] h-[80px] justify-center rounded-2xl bg-white border border-stone-500">
                        <Text className="text-[14px] font-bold mb-[10px] mt-[10px]">Tài xế nhấn 'hoàn tất' đơn hàng nhưng không giao hàng cho tôi </Text>
                    </View>
                    <View className="pl-4 pr-2 w-[370px] ml-[3px] h-[49px] justify-center rounded-2xl bg-white border border-stone-500">
                        <Text className="text-[14px] font-bold mb-[10px] mt-[10px]">Tôi muốn nhận lại đơn bị huỷ</Text>
                    </View>
                    <View className="pl-4 pr-2 w-[370px] ml-[3px] h-[49px] justify-center rounded-2xl bg-white border border-stone-500">
                        <Text className="text-[14px] font-bold mb-[10px] mt-[10px]">Làm sao để huỷ đơn hàng</Text>
                    </View>
                    <View className="pl-4 pr-2 w-[370px] ml-[3px] h-[50px] justify-center rounded-2xl bg-white border border-stone-500">
                        <Text className="text-[14px] font-bold mb-[10px] mt-[10px]">Tôi muốn đánh giá thái độ tài xế</Text>
                    </View>
                    <View className="pl-4 pr-2 w-[370px] ml-[3px] h-[80px] justify-center rounded-2xl bg-white border border-stone-500">
                        <Text className="text-[14px] font-bold mb-[10px] mt-[10px]">Vì sao tôi không thế thanh toán đơn hàng bằng tiền mặt?</Text>
                    </View>
                    <View className="pl-4 pr-2 w-[370px] ml-[3px] h-[49px] justify-center rounded-2xl bg-white border border-stone-500">
                        <Text className="text-[14px] font-bold mb-[10px] mt-[10px]">Khi nào tôi nhận được tiền hoàn trả?</Text>
                    </View>

                    <View className="flex-1 mt-[25px]">
                        <TextInput
                            onChangeText={handleChangeText}
                            className="w-[375px] h-[80px] ml-[9px] opacity-[100px] bg-white pl-4 pr-4 pt-2 text-black rounded-2xl border border-black-300"
                            placeholder="Nhập vấn đề của bạn vào"
                            placeholderclassName="ml-[10px]"
                            multiline={true}
                            numberOfLines={1}
                            textAlignVertical="top"
                        />
                    </View>
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