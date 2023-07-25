import React, { useEffect, useState } from 'react';
import { Image, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { themeColors } from "../theme";
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native'
import data from '../src/data'
export default function DetailDepartmentScreen() {
    const navigation = useNavigation();
    const RenderItem = ({item, index}) =>{
          return (
        <View>
        <TouchableOpacity className=" flex flex-row mb-3 ml-5">
          <View><Image source={item.image} className="w-[100px] h-[90px] rounded-lg"/></View>
          <View className=" ml-3">
          <Text>{item.name}</Text>
          <View className="flex-row mt-2">
          <Image source={item.check} className="w-[20px] h-[20px] rounded-lg"/>
          <Text className="ml-1">{item.number} </Text>
          </View>
          <Text className="ml-1 mt-3">{item.address}</Text>
          </View>
          
          </TouchableOpacity>
          <View className=" mb-3 h-1 bg-green-600 w-25 rounded-md"></View>
        </View>
        
        
          )
    }
    return (
<SafeAreaView className=" bg-white">
    <View className="flex-row">
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="absolute top-3 left-4 bg-gray-50 p-2 rounded-full shadow">
                <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
            </TouchableOpacity>
            <Text className="top-6 left-44 font-bold text-lg "
            >Bún
            
            </Text>
            <Icon.Search height="25" width="25" stroke="gray" 
            
            className="top-6 left-72 "/>
    </View>
    <View>
    <FlatList 
    contentContainerStyle={{
        paddingBottom: 50
    }}
    className="mt-20"
    data={data}
    renderItem={RenderItem}
    keyExtractor={item => item.id}
    />
    </View>
        
        
</SafeAreaView>
    
        
    )
}