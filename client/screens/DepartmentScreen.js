import React, { useState,useEffect } from 'react'
import { SafeAreaView, View, FlatList, ImageBackground, TouchableOpacity, Text, TextInput, } from 'react-native';
import * as Icon from "react-native-feather";
import { urlFor } from '../sanity'
import { getCategories } from '../api';
import { themeColors } from '../theme'


export default function DepartmentScreen({navigation}) {
    const [Categories, setCategorie] = useState ([])
    const goToDetail = () => {
        navigation.navigate('DetailDepartment')
    }
    const goToSearch =() =>{
        navigation.navigate('Search')
    }
    useEffect(()=>{
        getCategories().then(data =>{
            setCategorie(data)
        })
    })
    const renderItem = ({item, index }) => {
        return (
            <View className='ml-2'>
                <TouchableOpacity className="m-3"
                onPress={goToDetail}
                >
                    <View>
                        <ImageBackground imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} className="w-40 h-40" source={{uri: urlFor(item.image).url()}} resizeMode="cover">
                        </ImageBackground>
                    </View>
                    <View className=' bg-teal-600 rounded-br-2xl rounded-bl-2xl'>
                        <Text className='text-center text-white font-black text-lg'>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView className="bg-white ">
            <Text className="text-[20px] bottom-[5px] font-large text-center font-bold rounded-full p-3">Danh Mục</Text>
        <TouchableOpacity
        onPress={goToSearch}>
            <View className="flex-row items-center space-x-2 px-4 pb-2 ">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput placeholder='tìm món ăn' className="ml-2 flex-1" keyboardType='default' />
                </View>
            </View>
        </TouchableOpacity> 
            <FlatList
                contentContainerStyle={{
                    paddingBottom: 100
                }}
                data={Categories}
                renderItem={renderItem}
                numColumns={2}
            />
        </SafeAreaView>
    )
}