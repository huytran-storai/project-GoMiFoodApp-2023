import React, { useState, useEffect } from 'react'
import { SafeAreaView, Dimensions, TouchableOpacity, View, Text, TextInput, StyleSheet, Image, ScrollView } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { TrashIcon } from 'react-native-heroicons/solid';
import { CheckBox } from 'react-native-elements';
import { themeColors } from '../theme';
const ListYourWallet = ({ navigation }) => {
    const [selectedIndex, setIndex] = React.useState(1);

    const goBack = () => {
        navigation.goBack();
    }
    return (
        <SafeAreaView className="w-full h-full bg-white">
            <Text className="text-black text-[14px] font-bold text-center">Thêm Thẻ Tín Dụng</Text>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: '2' }} >
                <TouchableOpacity onPress={goBack} className="w-[35px] h-[35px] ml-[10px] text-center bg-teal-500 rounded-full justify-center items-center bottom-6">
                    <ChevronLeftIcon style={{ color: 'white' }}></ChevronLeftIcon>
                </TouchableOpacity>
            </View>
            <View className="mx-9 mt-3">
                <Text className=" text-black text-[12px] mb-3 text-center font-semibold">Bạn đang chọn mặc định: *220037</Text>
                <Text className=" text-black text-[10px] mb-3 text-center font-semibold">*Chọn thẻ tín dụng bạn muốn áp dụng thanh toá mặc định</Text>
            </View>
            <ScrollView>
                <View className="flex-row items-center mx-10 justify-between" style={{ borderBottomColor: themeColors.bg, borderBottomWidth: '1' }} >
                    <View className="flex-row items-center">
                        <CheckBox
                            checked={selectedIndex === 1}
                            onPress={() => setIndex(1)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                        />
                        <Image className="w-10 h-10" source={require('../assets/images/Visa.png')} />
                    </View>
                    <Text className="font-semibold">*220037</Text>
                    <TrashIcon style={{ color: 'red' }} ></TrashIcon>
                </View>
                <View className="flex-row items-center mx-10 justify-between" style={{ borderBottomColor: themeColors.bg, borderBottomWidth: '1' }} >
                    <View className="flex-row items-center">
                        <CheckBox
                            checked={selectedIndex === 2}
                            onPress={() => setIndex(2)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                        />
                        <Image className="w-10 h-10" source={require('../assets/images/Visa.png')} />
                    </View>
                    <Text className="font-semibold">*122037</Text>
                    <TrashIcon style={{ color: 'red' }} ></TrashIcon>
                </View>
                <View className="flex-row items-center mx-10 justify-between" style={{ borderBottomColor: themeColors.bg, borderBottomWidth: '1' }} >
                    <View className="flex-row items-center">
                        <CheckBox
                            checked={selectedIndex === 3}
                            onPress={() => setIndex(3)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                        />
                        <Image className="w-10 h-10" source={require('../assets/images/Mastercard.png')} />
                    </View>
                    <Text className="font-semibold">*920037</Text>
                    <TrashIcon style={{ color: 'red' }} ></TrashIcon>
                </View>
                <View className="flex-row items-center mx-10 justify-between" style={{ borderBottomColor: themeColors.bg, borderBottomWidth: '1' }} >
                    <View className="flex-row items-center">
                        <CheckBox
                            checked={selectedIndex === 4}
                            onPress={() => setIndex(4)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                        />
                        <Image className="w-10 h-10" source={require('../assets/images/JCB.png')} />
                    </View>
                    <Text className="font-semibold">*924031</Text>
                    <TrashIcon style={{ color: 'red' }} ></TrashIcon>
                </View>
            </ScrollView>


            <View className="justify-center items-center mt-[10px]">
                <TouchableOpacity className="w-[135px] h-[48px] mt-[100px] mb-[10px] bg-teal-500 rounded-2xl justify-center items-center">
                    <Text className=" text-white text-[16px] font-bold">Thay Đổi</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ListYourWallet;
