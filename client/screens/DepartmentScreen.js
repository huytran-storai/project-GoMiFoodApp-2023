import React, { useState } from 'react'
import { SafeAreaView, View, FlatList, ImageBackground, TouchableOpacity, Text, TextInput, } from 'react-native';
import * as Icon from "react-native-feather";
import data from '../src/data'

export default function DepartmentScreen() {
    const renderItem = ({ item, index }) => {
        return (

            <View className='ml-2 h-full'>
                <TouchableOpacity className="m-3 ">
                    <View>
                        <ImageBackground imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} className=" w-40 h-40  " source={item.image} resizeMode="cover">
                        </ImageBackground>
                    </View>
                    <View className=' bg-emerald-700 rounded-br-2xl rounded-bl-2xl'>
                        <Text className='text-center text-white font-black text-lg   '>{item.name}</Text>
                    </View>
                </TouchableOpacity>

            </View>

        )
    }
    return (
        <SafeAreaView className="bg-white">
            <Text className="text-[20px] bottom-[5px] font-large text-center font-bold rounded-full p-3">Danh Mục</Text>
            <View className="flex-row items-center space-x-2 px-4 pb-2 ">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput placeholder='Restaurants' className="ml-2 flex-1" keyboardType='default' />
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                        <Icon.MapPin height="20" width="20" stroke="gray" />
                        <Text className="text-gray-600">Ho Chi Minh,HCM</Text>
                    </View>
                </View>


            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </SafeAreaView>
    )
}